const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Result = require('../models/Result');

// @route   GET api/result
//desc      Get all results
//@access   private
router.get('/', async (req, res) => {
  try {
    const result = await Result.find().populate('game team');
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/result
//desc      Add new result
//@access   private
router.post('/', auth, async (req, res) => {
  const { game, team, goals, behinds, pointsFor, pointsAgainst } = req.body;

  try {
    let result = await Result.findOne({ game, team });

    if (result) {
      return res.status(400).json({ msg: 'Result already exists' });
    }

    result = new Result({
      game,
      team,
      goals,
      behinds,
      pointsFor,
      pointsAgainst
    });

    await result.save();
    res.send('result saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/result/:id
//desc      Update result
//@access   private
router.put('/:id', auth, async (req, res) => {
  const { game, team, goals, behinds, pointsFor, pointsAgainst } = req.body;

  const resultFields = {};
  if (game) resultFields.game = game;
  if (team) resultFields.team = team;
  if (goals) resultFields.goals = goals;
  if (behinds) resultFields.behinds = behinds;
  if (pointsFor) resultFields.pointsFor = pointsFor;
  if (pointsAgainst) resultFields.pointsAgainst = pointsAgainst;

  try {
    let result = await Result.findById(req.params.id);
    if (!result) return res.status(404).json({ msg: 'Result not found' });

    result = await Result.findByIdAndUpdate(
      req.params.id,
      { $set: resultFields },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/result/:id
//desc      Delete result
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    let result = await Result.findById(req.params.id);
    if (!result) return res.status(404).json({ msg: 'Result not found' });

    await Result.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Result removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
