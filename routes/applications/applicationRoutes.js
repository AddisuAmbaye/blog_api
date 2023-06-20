const express = require('express');
const applicationRouter = express.Router();
const {applicationCtrl,viewApplicationCtrl} = require('../../controllers/applications/applicationCtrl');
const isLogin = require("../../middlewares/isLogin");

// Create a new college application
// POST/api/v1/applications
applicationRouter.post('/', isLogin, applicationCtrl);

// Get all college applications
// GET/api/v1/applications 
applicationRouter.get('/', isLogin, viewApplicationCtrl);

module.exports = applicationRouter;