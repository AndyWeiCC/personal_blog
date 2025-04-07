const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  city: { type: Buffer, required: true },
  filetype: String, // e.g., "image" or "video"
  description: String,
});

module.exports = mongoose.model('City', citySchema);
