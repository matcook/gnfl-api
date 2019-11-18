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
    ref: 'team',
    required: true
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'venue',
    required: true
  }
});

module.exports = mongoose.model('game', GameSchema);
