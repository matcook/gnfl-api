const express = require('express');
const router = express.Router();

// @route   GET api/ladder
//desc      Get all ladders
//@access   private
router.get('/', (req, res) => {
  res.send('Get all ladders');
});

// @route   POST api/ladder
//desc      Add new ladder
//@access   private
router.post('/', (req, res) => {
  res.send('Add ladder');
});

// @route   PUT api/ladder/:id
//desc      Update ladder
//@access   private
router.put('/:id', (req, res) => {
  res.send('Update ladder');
});

// @route   DELETE api/ladder/:id
//desc      Delete ladder
//@access   private
router.delete('/:id', (req, res) => {
  res.send('Delete ladder');
});

module.exports = router;
