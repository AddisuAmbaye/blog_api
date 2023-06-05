const mongoose = require('mongoose');
// const University = require('../../model/University/University');

const collegeApplicationStatusSchema = new mongoose.Schema({
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
  jointApplicatonStatus: { type: String, required: true },
  questionsStatus: { type: String, required: true },
  recommendersAndFERPAStatus: { type: String, required: true },
  jointApplicatonPersonalEssayRequired: { type: Boolean, required: true },
  collegeQuestionsRequired: { type: Number, required: true },
  writingSupplementRequired: { type: Boolean, required: true },
});

const CollegeApplicationStatus = mongoose.model('CollegeApplicationStatus', collegeApplicationStatusSchema);

module.exports = CollegeApplicationStatus;
