const University = require('../../model/University/University');
const CollageApplicationStatus = require('../../model/Dashboard/Dashboard');


const applicationStatusCtrl = async (req, res) => {
    try {
      const collageData = req.body;
      
      // Check if college already exists in the database
      const existingCollage = await University.findOne({ name: collageData.name });
      let collage;
      let collageApplicationStatus;
      if (existingCollage) {
        // Retrieve existing application status for the collage
        collage = existingCollage;
        collageApplicationStatus = await CollageApplicationStatus.findOne({ collage: collage._id });
      } else {
        // Create a new college document
        collage = new University(collageData);
        await collage.save();
    
        // Create a new college application status document with default values
        collageApplicationStatus = new CollageApplicationStatus({
          collage: collage._id,
          commonAppStatus: 'In progress',
          questionsStatus: 'In progress',
          recommendersAndFERPAStatus: 'In progress',
          commonAppPersonalEssayRequired: true,
          collegeQuestionsRequired: 1,
          writingSupplementRequired:false,
        });
        await collageApplicationStatus.save();
      }
      
      res.json({ collage, collageApplicationStatus });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
//view all collages appliction status
const viewApplicationStatusCtrl = async (req, res) => {
    try {
      const collageApplicationStatus = await CollageApplicationStatus.find().populate('collage');
      res.render('dashboard.js', { collageApplicationStatus });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    }
  }

  module.exports ={
    applicationStatusCtrl,
    viewApplicationStatusCtrl,
} 