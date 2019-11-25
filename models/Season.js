const mongoose = require('mongoose');

const SeasonSchema = mongoose.Schema({
  year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('season', SeasonSchema);
