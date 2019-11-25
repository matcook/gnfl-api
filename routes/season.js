const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Season = require('../models/Season');

// @route   GET api/season
//desc      Get all seasons
//@access   private
router.get('/', async (req, res) => {
  try {
    const season = await Season.find().select(' -__v');
    res.json(season);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/season
//desc      Add new season
//@access   private
router.post('/', auth, async (req, res) => {
  const { year } = req.body;

  try {
    let season = await Season.findOne({ year });

    if (season) {
      return res.status(400).json({ msg: 'Season already exists' });
    }

    season = new Season({
      year
    });

    await season.save();
    res.send('season saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/season/:id
//desc      Update season
//@access   private
router.put('/:id', auth, async (req, res) => {
  const { year } = req.body;
  const seasonFields = {};
  if (year) seasonFields.year = year;

  try {
    let season = await Season.findById(req.params.id);
    if (!season) return res.status(404).json({ msg: 'Season not found' });

    season = await Season.findByIdAndUpdate(
      req.params.id,
      { $set: seasonFields },
      { new: true }
    );
    res.json(season);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
