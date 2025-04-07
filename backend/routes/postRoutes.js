const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const s3 = require('../config/s3');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  console.log('req.query', req.query);
  const { lang } = req.query;

  try {
    const article = await Post.findById(id);


    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    const translation = article.translations.find(t => t.language === lang);

    if (!translation) {
      return res.status(404).json({ error: 'Translation not found for the specified language' });
    }

    console.log('translation', translation);
    res.json(translation);
  } catch (err) {
    console.error('Error fetching article:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Route to get all posts
router.get('/', async (req, res) => {
  try {
    const { lang } = req.query;
    const posts = await Post.find();
    const translations = posts.map(post => {
      const translation = post.translations.find(t => t.language === lang);
      return {
        _id: post._id,
        translation
      };
    });
    res.json(translations);
  } catch (e) {
    res.status(500).send({ message: 'Error fetching posts', e });
  }
});

router.put('/:id', async (req, res) => {

  const { id } = req.params;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const { description, content } = req.body;

  const image = req.files.thumbnail;

  const params = {
    Body: image.data,
    Key: `pic_${(Date.now()).toString()}-${image.name}`,
    Bucket: process.env.S3_BUCKET_NAME,
    ContentType: image.mimetype,
  };

  const result = await s3.upload(params).promise(); 

  console.log(result.Location);

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {thumbnail: result.Location, description, content},
      {new: true}
    );
    
    if (!updatedPost) {
      return res.status(404).json({message: 'Post not found'})
    }

    res.json(updatedPost);

  } catch (e) {
    res.status(500).send({message: 'Error updating post', e})
  }

});


module.exports = router;