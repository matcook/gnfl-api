const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
  season: {
    type: Number,
    required: true
  },
  round: {
    type: Number,
    required: true
  },
  datetime: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  homeTeam: {
    type: String,
    required: true
  },
  homeTeamGoals: {
    type: Number,
    required: true
  },
  homeTeamPoints: {
    type: Number,
    required: true
  },
  awayTeam: {
    type: String,
    required: true
  },
  awayTeamGoals: {
    type: Number,
    required: true
  },
  awayTeamPoints: {
    type: Number,
    required: true
  }
});

const TeamSchema = mongoose.Schema({
  grade: {
    type: String,
    required: true
  },
  matches: [MatchSchema]
});

const ClubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  teams: [TeamSchema],
  location: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  president: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('club', ClubSchema);
