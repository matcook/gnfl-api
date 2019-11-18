const express = require('express');
const router = express.Router();

const Club = require('../models/Club');

// @route   GET api/result
//desc      Get all results
//@access   private
router.get('/', (req, res) => {
  res.send('get results');
});

// @route   POST api/result
//desc      Add new result
//@access   private
router.post('/', (req, res) => {
  res.send('Add result');
});

// @route   PUT api/result/:id
//desc      Update result
//@access   private
router.put('/:id', (req, res) => {
  res.send('Update result');
});

// @route   DELETE api/result/:id
//desc      Delete result
//@access   private
router.delete('/:id', (req, res) => {
  res.send('Delete result');
});

module.exports = router;
