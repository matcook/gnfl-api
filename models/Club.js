const mongoose = require('mongoose');

const ClubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'team'
    }
  ],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'venue'
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
