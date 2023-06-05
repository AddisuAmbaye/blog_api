const mongoose = require('mongoose');
// Define the schema for the college application form
const ApplicationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String }
    },
    highSchool: {
      name: { type: String },
      city: { type: String },
      state: { type: String },
      graduationYear: { type: Number }
    },
    transcript: {
      file: {
        data: Buffer,
        contentType: String
      }
    },
    testScore: {
        EHEECE: { type: Number },
    },
    essays: {
      essay1: { type: String },
      essay2: { type: String }
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