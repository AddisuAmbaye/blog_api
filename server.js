const express = require('express');
require('dotenv').config();
require('./config/dbConnect');
const app = express();

// middleware
// routes
// error handlers middleware
// listen to server

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`server is up and listening on port ${PORT}`));