const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'games',
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teams',
    required: true
  },
  goals: {
    type: Number,
    required: true
  },
  behinds: {
    type: Number,
    required: true
  },
  pointsFor: {
    type: Number,
    required: true
  },
  pointsAgainst: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('result', ResultSchema);
