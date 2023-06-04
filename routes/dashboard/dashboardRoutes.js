const express = require('express');
const dashboardRouter = express.Router();
const {applicationStatusCtrl,viewApplicationStatusCtrl} = require('../../controllers/dashboard/dashboardCtrl')

//create application status in new database to fetch to dashboard from the database
//POST/api/v1/dashboard
dashboardRouter.post('/',applicationStatusCtrl);
//Dashboard route to get all the information inthe dashboard along with the application status
//GET/api/v1/dashboard
dashboardRouter.get('/',viewApplicationStatusCtrl);

module.exports = dashboardRouter;