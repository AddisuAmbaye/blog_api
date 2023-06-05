const Application = require('../../model/Application/Application');

// Create a new college application
const applicationCtrl = async (req, res) => {
    try {
      application = new Application(req.body);
      await application.save();
      res.status(201).json(application);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }

// Get all college applications
const viewApplictionCtrl = async (req, res) => {
    try {
      application = await Application.find();
      res.json(application);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
module.exports = {
     applicationCtrl,
     viewApplictionCtrl
     };

    //  const Application = require('../../model/Application/Application');

    //  // Create a new college application
    //  const applicationCtrl = async (req, res) => {
    //    try {
    //      const newApplication = new Application(req.body);
    //      await newApplication.save();
    //      res.status(201).json(newApplication);
    //    } catch (err) {
    //      console.error(err);
    //      res.status(500).json({ message: 'Server error' });
    //    }
    //  };
     
    //  // Get all college applications
    //  const viewApplicationCtrl = async (req, res) => {
    //    try {
    //      const allApplications = await Application.find();
    //      res.json(allApplications);
    //    } catch (err) {
    //      console.error(err);
    //      res.status(500).json({ message: 'Server error' });
    //    }
    //  };
     
    //  module.exports = {
    //    applicationCtrl,
    //    viewApplicationCtrl
    //  };   