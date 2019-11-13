const express = require('express');
const router = express.Router();

const Club = require('../models/Club');

// @route   GET api/club
//desc      Get all clubs
//@access   private
router.get('/', async (req, res) => {
  try {
    const club = await Club.find();
    res.json(club);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/club
//desc      Add new club
//@access   private
router.post('/', async (req, res) => {
  const { name, teams, location, phone, email, president } = req.body;

  try {
    let club = await Club.findOne({ name });

    if (club) {
      return res.status(400).json({ msg: 'Club already exists' });
    }

    club = new Club({
      name,
      teams,
      location,
      phone,
      email,
      president
    });

    await club.save();
    res.send('club saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  // res.send('Add club');
});

// @route   PUT api/club/:id
//desc      Update club
//@access   private
router.put('/:id', (req, res) => {
  res.send('Update club');
});

// @route   DELETE api/club/:id
//desc      Delete club
//@access   private
router.delete('/:id', (req, res) => {
  res.send('Delete club');
});

module.exports = router;
