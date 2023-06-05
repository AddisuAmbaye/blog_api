const express = require('express');
const applicationRouter = express.Router();
const {applicationCtrl,viewApplictionCtrl} = require('../../controllers/applications/applicationCtrl')

// Create a new college application
// POST/api/v1/applications
applicationRouter.post('/', applicationCtrl);

// Get all college applications
// GET/api/v1/applications
applicationRouter.get('/',viewApplictionCtrl);

module.exports = applicationRouter;