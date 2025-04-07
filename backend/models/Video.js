const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  videoId: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
module.exports = mongoose.model('Video', videoSchema);
