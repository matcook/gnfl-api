const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clubs',
    required: true
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'grades',
    required: true
  }
});

module.exports = mongoose.model('result', ResultSchema);
