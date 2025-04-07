const express = require('express');
const s3 = require('../config/s3');
const Post = require('../models/Post');
const router = express.Router();


router.post('/', async (req, res) => {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }


  const { title, content, tags} = req.body;
  const imageArray = Array.isArray(req.files.images) ? req.files.images : [req.files.images];

  try {

    const imageUrls = await Promise.all(
      imageArray.map(async (image) => {
        console.log(image);
        const params = {
          Body: image.data,
          Key: `pic_${(Date.now()).toString()}-${image.name}`,
          Bucket: process.env.S3_BUCKET_NAME,
          ContentType: image.mimetype,
        };
        const result = await s3.upload(params).promise(); 
        
        return {url: result.Location, caption: result.name};
    }));

    const newPost = new Post({
      title,
      content,
      tags,
      images: imageUrls,
    });

    await newPost.save();
    res.status(201).json(newPost);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router