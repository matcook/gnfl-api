const mongoose = require('mongoose');

const GradeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('grade', GradeSchema);
