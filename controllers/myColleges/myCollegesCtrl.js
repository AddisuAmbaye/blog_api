const UserCollege = require("../../model/MyColleges/MyColleges");
const College = require("../../model/University/University");
const User = require("../../model/User/User");

//get my colleges 
const getMyCollegesCtrl = async (req, res) => {
    try {
      const userColleges = await UserCollege.find({ user: req.user._id }).populate('college');
      const colleges = userColleges.map(userCollege => userCollege.college);
      res.json('myColleges', { user: req.user, colleges });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };

  //add colleges to mycolleges
const addCollegeCtrl = async (req, res) => {
    try {
      //find college
      const college = await College.findById(req.params.id);
      // find user
      const user = await User.findById(req.userAuth);
      // Create a new UserCollege document with the current user's ID and the ID of the college being added
      const userCollege = new UserCollege({
        user: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        college: college._id
        
      });
      await userCollege.save();

    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };

  module.exports = {
    getMyCollegesCtrl,
    addCollegeCtrl 
  }