const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Team = require('../models/Team');

// @route   GET api/team
//desc      Get all teams
//@access   private
router.get('/', async (req, res) => {
  try {
    const team = await Team.find().populate('club grade', 'name -_id');
    res.json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/team
//desc      Add new team
//@access   private
router.post('/', auth, async (req, res) => {
  const { club, grade } = req.body;

  try {
    let team = await Team.findOne({ club, grade });

    if (team) {
      return res.status(400).json({ msg: 'Team already exists' });
    }

    team = new Team({
      club,
      grade
    });

    await team.save();
    res.send('team saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/team/:id
//desc      Update team
//@access   private
router.put('/:id', auth, async (req, res) => {
  const { club, grade } = req.body;
  const teamFields = {};
  if (club) teamFields.club = club;
  if (grade) teamFields.grade = grade;

  try {
    let team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ msg: 'Team not found' });

    team = await Team.findByIdAndUpdate(
      req.params.id,
      { $set: teamFields },
      { new: true }
    );
    res.json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/team/:id
//desc      Delete team
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    let team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ msg: 'Team not found' });

    await Team.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Team removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
