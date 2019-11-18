const express = require('express');
const router = express.Router();

const Club = require('../models/Club');

// @route   GET api/match
//desc      Get all matches
//@access   private
router.get('/', (req, res) => {
  res.send('get matches');
});

// @route   POST api/match
//desc      Add new match
//@access   private
router.post('/', (req, res) => {
  res.send('Add match');
});

// @route   PUT api/match/:id
//desc      Update match
//@access   private
router.put('/:id', (req, res) => {
  res.send('Update match');
});

// @route   DELETE api/match/:id
//desc      Delete match
//@access   private
router.delete('/:id', (req, res) => {
  res.send('Delete match');
});

module.exports = router;
