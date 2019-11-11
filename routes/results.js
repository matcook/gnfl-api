const express = require('express');
const router = express.Router();

// @route   GET api/results
//desc      Get all results
//@access   private
router.get('/', (req, res) => {
  res.send('Get all results');
});

// @route   POST api/results
//desc      Add new results
//@access   private
router.post('/', (req, res) => {
  res.send('Add result');
});

// @route   PUT api/results/:id
//desc      Update result
//@access   private
router.put('/:id', (req, res) => {
  res.send('Update result');
});

// @route   DELETE api/results/:id
//desc      Delete Result
//@access   private
router.delete('/:id', (req, res) => {
  res.send('Delete result');
});

module.exports = router;
