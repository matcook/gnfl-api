const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Grade = require('../models/Grade');

// @route   GET api/grade
//desc      Get all grades
//@access   private
router.get('/', async (req, res) => {
  try {
    const grade = await Grade.find().select('-__v');
    res.json(grade);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/grade
//desc      Add new grade
//@access   private
router.post('/', auth, async (req, res) => {
  const { name } = req.body;

  try {
    let grade = await Grade.findOne({ name });

    if (grade) {
      return res.status(400).json({ msg: 'Grade already exists' });
    }

    grade = new Grade({
      name
    });

    await grade.save();
    res.send('Grade saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/grade/:id
//desc      Update grade
//@access   private
router.put('/:id', auth, async (req, res) => {
  const { name } = req.body;
  const gradeFields = {};
  if (name) gradeFields.name = name;

  try {
    let grade = await Grade.findById(req.params.id);
    if (!grade) return res.status(404).json({ msg: 'Grade not found' });

    grade = await Grade.findByIdAndUpdate(
      req.params.id,
      { $set: gradeFields },
      { new: true }
    );
    res.json(grade);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/grade/:id
//desc      Delete grade
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    let grade = await Grade.findById(req.params.id);
    if (!grade) return res.status(404).json({ msg: 'Grade not found' });

    await Grade.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Grade removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
