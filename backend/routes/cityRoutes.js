const express = require('express');
const router = express.Router();
const City = require('../models/City');

// Route to get all cities
router.get('/', async (req, res) => {
  try {
    const cities = await City.find();
    console.log('success!');
    res.json(cities);
  } catch (error) {
    res.status(500).send('Server error');
  }
});
// Route to delete a new city


// Route to get a specific city's media

router.get('/:city', async (req, res) => {
  try {
    const city = await City.findOne({ city: req.params.city });
    if (!city) {
      return res.status(404).send('City not found');
    }
    res.json(city);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;