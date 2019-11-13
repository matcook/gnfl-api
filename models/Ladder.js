const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({
  team: {
    type: String,
    required: true
  },
  season: {
    type: Number,
    required: true
  },
  played: {
    type: Number,
    required: true
  },
  win: {
    type: Number,
    required: true
  },
  loss: {
    type: Number,
    required: true
  },
  draw: {
    type: Number,
    required: true
  },
  for: {
    type: Number,
    required: true
  },
  against: {
    type: Number,
    required: true
  },
  percent: {
    type: Number,
    required: true
  },
  points2: {
    type: Number,
    required: true
  }
});

const LadderSchema = mongoose.Schema({
  season: {
    type: Number,
    required: true
  },
  results: [ResultSchema]
});

module.exports = mongoose.model('ladder', LadderSchema);
