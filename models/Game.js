const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
  season: {
    type: Number,
    required: true
  },
  round: {
    type: Number,
    required: true
  },
  homeTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teams',
    required: true
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teams',
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('game', GameSchema);
