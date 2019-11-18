const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'club',
    required: true
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'grade',
    required: true
  }
});

module.exports = mongoose.model('team', TeamSchema);
