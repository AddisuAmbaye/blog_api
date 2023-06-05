const University = require('../../model/University/University');
const CollegeApplicationStatus = require('../../model/Dashboard/Dashboard');

const applicationStatusCtrl = async (req, res) => {
  try {
    const collegeData = req.body;

    // Check if college already exists in the database
    const existingCollege = await University.findOne({ name: collegeData.name });
    let college;
    let collegeApplicationStatus;
    if (existingCollege) {
      // Retrieve existing application status for the college
      college = existingCollege;
      collegeApplicationStatus = await CollegeApplicationStatus.findOne({ collage: college._id });
    } else {
      // Retrieve the required fields from an existing university document
      const requiredFields = await University.findOne().select('-_id name writingRequirements additionalInfo evaluations testPolicy links address email phone');
      // Create a new college document with the required fields and the request body data
      college = new University({...requiredFields._doc, ...collegeData});
      await college.save();

      // Create a new college application status document with default values
      collegeApplicationStatus = new CollegeApplicationStatus({
        college: college._id,
        jointApplicatonStatus: 'In progress',
        questionsStatus: 'In progress',
        recommendersAndFERPAStatus: 'In progress',
        jointApplicatonPersonalEssayRequired: true,
        collegeQuestionsRequired: 1,
        writingSupplementRequired: false,
      });
      await collegeApplicationStatus.save();
    }

    res.json({ college, collegeApplicationStatus });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// View all college application statuses
const viewApplicationStatusCtrl = async (req, res) => {
  try {
    const collegeApplicationStatus = await CollegeApplicationStatus.find().populate('collage');
    res.render('dashboard.js', { collegeApplicationStatus });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  applicationStatusCtrl,
  viewApplicationStatusCtrl,
};

