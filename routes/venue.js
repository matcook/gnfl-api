const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Venue = require('../models/Venue');

// @route   GET api/venue
//desc      Get all venues
//@access   private
router.get('/', async (req, res) => {
  try {
    const venue = await Venue.find();
    res.json(venue);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/venue
//desc      Add new venue
//@access   private
router.post('/', auth, async (req, res) => {
  const { name, address } = req.body;

  try {
    let venue = await Venue.findOne({ name });

    if (venue) {
      return res.status(400).json({ msg: 'Venue already exists' });
    }

    venue = new Venue({
      name,
      address
    });

    await venue.save();
    res.send('Venue saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/venue/:id
//desc      Update venue
//@access   private
router.put('/:id', auth, async (req, res) => {
  const { name, address } = req.body;
  const venueFields = {};
  if (name) venueFields.name = name;
  if (address) venueFields.address = address;

  try {
    let venue = await Venue.findById(req.params.id);
    if (!venue) return res.status(404).json({ msg: 'Venue not found' });

    venue = await Venue.findByIdAndUpdate(
      req.params.id,
      { $set: venueFields },
      { new: true }
    );
    res.json(venue);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/venue/:id
//desc      Delete venue
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    let venue = await Venue.findById(req.params.id);
    if (!venue) return res.status(404).json({ msg: 'Venue not found' });

    await Venue.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Venue removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
