const express = require('express');
const router = express.Router();

// @route   GET api/news
//desc      Get all news
//@access   private
router.get('/', (req, res) => {
  res.send('Get all news');
});

// @route   POST api/news
//desc      Add new news
//@access   private
router.post('/', (req, res) => {
  res.send('Add news');
});

// @route   PUT api/news/:id
//desc      Update news
//@access   private
router.put('/:id', (req, res) => {
  res.send('Update news');
});

// @route   DELETE api/news/:id
//desc      Delete news
//@access   private
router.delete('/:id', (req, res) => {
  res.send('Delete news');
});

module.exports = router;
