const mongoose = require('mongoose');


const collageApplicationStatusSchema = new mongoose.Schema({
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
  jointApplicatonStatus: { type: String, required: true },
  questionsStatus: { type: String, required: true },
  recommendersAndFERPAStatus: { type: String, required: true },
  jointApplicatonPersonalEssayRequired: { type: Boolean, required: true },
  collegeQuestionsRequired: { type: Number, required: true },
  writingSupplementRequired: { type: Boolean, required: true },
});

const CollageApplicationStatus = mongoose.model('CollageApplicationStatus', collageApplicationStatusSchema);

module.exports = CollageApplicationStatus;