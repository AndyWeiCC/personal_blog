
const express = require('express');
const router = express.Router();
const Video = require('../models/Video');
const s3 = require('../config/s3');

router.get('/', async (req, res) => {
  const { topic } = req.query; // Access query parameter
  console.log(topic);
  try {
    const videos = await Video.find({ topic });
    res.json(videos);
  } catch (error) {
    res.status(500).send('Server error', error);
  }
});

module.exports = router;