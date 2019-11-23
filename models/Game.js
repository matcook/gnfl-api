const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
  season: {
    type: Number,
    required: true
  },
  round: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "venue",
    required: true
  },
  homeTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "team",
    required: true
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "team",
    required: true
  },
  homeTeamGoals: {
    type: Number,
    default: 0
  },
  homeTeamBehinds: {
    type: Number,
    default: 0
  },
  awayTeamGoals: {
    type: Number,
    default: 0
  },
  awayTeamBehinds: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("game", GameSchema);
