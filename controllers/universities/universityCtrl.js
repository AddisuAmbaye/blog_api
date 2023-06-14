const University = require("../../model/University/University");

// create new university
const universityCreateCtrl = async (req, res) => {
    try {
      const university = new University(req.body);
      await university.save
      // and return the newly created university
      res.status(201).json(university);
    } catch (err) {
      console.error('Error creating university:', err);
      res.status(500).send('Error creating university');
    }
  };

  //read university by id
const universityCtrl = async (req, res) => {
    const { id } = req.params;
  
    try {
      const university = await University.findById(id);
      if (university) {
        res.json(university);
      } else {
        res.status(404).send('University not found');
      }
    } catch (err) {
      console.error('Error retrieving university:', err);
      res.status(500).send('Error retrieving university');
    }
  };

  // read all universities
  const universitiesCtrl = async (req, res) => {
    try {
      const universities = await University.find();
      res.json(universities);
    } catch (err) {
      console.error('Error retrieving universities:', err);
      res.status(500).send('Error retrieving universities');
    }
  };

//update universities by id
const universityUpdateCtrl = async (req, res) => {
    const { id } = req.params;
  
    try {
      const university = await University.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true, // return the updated document
          runValidators: true, // validatethe update against the schema
        }
      );
      if (university) {
        res.json(university);
      } else {
        res.status(404).send('University not found');
      }
    } catch (err) {
      console.error('Error updating university:', err);
      res.status(500).send('Error updating university');
    }
  };

//delete university by id
const universityDeleteCtrl = async (req, res) => {
    const { id } = req.params;
  
    try {
      const university = await UniversityModel.findByIdAndDelete(id);
      if (university) {
        res.json(university);
      } else {
        res.status(404).send('University not found');
      }
    } catch (err) {
      console.error('Error deleting university:', err);
      res.status(500).send('Error deleting university');
    }
  };

  module.exports = {
    universityCreateCtrl,
    universityDeleteCtrl,
    universityUpdateCtrl,
    universitiesCtrl,
    universityCtrl,
  }
