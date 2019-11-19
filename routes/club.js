const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Club = require('../models/Club');

// @route   GET api/club
//desc      Get all clubs
//@access   private
router.get('/', async (req, res) => {
  try {
    const club = await Club.find()
      .populate('location')
      .populate({
        path: 'teams',
        select: '-club',
        populate: { path: 'grade', select: 'name -_id ' }
      });
    res.json(club);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/club
//desc      Add new club
//@access   private
router.post('/', auth, async (req, res) => {
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
router.put('/:id', auth, async (req, res) => {
  const { name, teams, location, phone, email, president } = req.body;
  const clubFields = {};
  if (name) clubFields.name = name;
  if (teams) clubFields.teams = teams;
  if (location) clubFields.location = location;
  if (phone) clubFields.phone = phone;
  if (email) clubFields.email = email;
  if (president) clubFields.president = president;

  try {
    let club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ msg: 'Club not found' });

    club = await Club.findByIdAndUpdate(
      req.params.id,
      { $set: clubFields },
      { new: true }
    );
    res.json(club);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/club/:id
//desc      Delete club
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    let club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ msg: 'Club not found' });

    await Club.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Club removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
