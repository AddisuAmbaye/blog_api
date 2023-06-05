const University = require('../../model/University/University');
const CollegeApplicationStatus = require('../../model/Dashboard/Dashboard');

const applicationStatusCtrl = async (req, res) => {
  try {
      const collegeData = req.body;
      // Retrieve the required fields from an existing university document
      const requiredFields = await University.findOne().select('-_id name writingRequirements additionalInfo evaluations testPolicy links address email phone');
      // Create a new college document with the required fields and the request body data
      college = new University({...requiredFields._doc, ...collegeData}); 
      // Create a new college application status document with default values
      collegeApplicationStatus = new CollegeApplicationStatus({
        college: college.name,
        jointApplicatonStatus: 'In progress',
        questionsStatus: 'In progress',
        recommendersAndFERPAStatus: 'In progress',
        jointApplicatonPersonalEssayRequired: true,
        collegeQuestionsRequired: 1,
        writingSupplementRequired: false,
      });
      await collegeApplicationStatus.save();
    

    res.json({ college, collegeApplicationStatus });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// View all college application statuses
const viewApplicationStatusCtrl = async (req, res) => {
  try {
    const collegeApplicationStatus = await CollegeApplicationStatus.find().populate('college');
    res.json({ collegeApplicationStatus });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  applicationStatusCtrl,
  viewApplicationStatusCtrl,
};

