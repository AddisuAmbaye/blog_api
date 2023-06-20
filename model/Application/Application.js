const mongoose = require('mongoose');
// Define the schema for the college application form
const ApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  
  college: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    required: false
    
  },
],
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  highSchool: {
    name: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    graduationYear: { type: Number, required: true }
  },
  transcript: {
    file: {
      data: { type: Buffer, required: true },
      contentType: { type: String, required: true }
    }
  },
  testScore: {
    Grade_8: { type: Number, required: true },
    Grade_12: { type: Number, required: true }
  },
  essay: {
    essay: { type: String, required: true }
  },
  recommendations: [{
    name: { type: String },
    relationship: { type: String },
    email: { type: String }
  }],
  payment: {
    amount: { type: Number },
    status: { type: String }
  },
  status: { type: String }
});
  
  // Define the model for the college application form
  const Application = mongoose.model('Application', ApplicationSchema);
  
  module.exports = Application;