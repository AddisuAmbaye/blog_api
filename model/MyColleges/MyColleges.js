const mongoose = require('mongoose');

const userCollegeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: true
  },
  collegeName: {
    type: String,
    required: false
  }
});

const UserCollege = mongoose.model('UserCollege', userCollegeSchema);

module.exports = UserCollege;