const express = require('express');
const router = express.Router();

// @route   GET api/team
//desc      Get all teams
//@access   private
router.get('/', (req, res) => {
  res.send('get teams');
});

// @route   POST api/team
//desc      Add new team
//@access   private
router.post('/', (req, res) => {
  res.send('Add team');
});

// @route   PUT api/team/:id
//desc      Update team
//@access   private
router.put('/:id', (req, res) => {
  res.send('Update team');
});

// @route   DELETE api/team/:id
//desc      Delete team
//@access   private
router.delete('/:id', (req, res) => {
  res.send('Delete team');
});

module.exports = router;
