const express = require('express');
require('dotenv').config();
require('./config/dbConnect');
const app = express();

// middleware
// routes

//users route
app.post('/api/v1/users/register', async() => {
    try {
        res.json({
            status: 'sucess',
            data: 'user registered',
             });
    } catch (error) {
        res.json(error.message);
    }
});

//user login
app.post('/api/v1/users/login', async() => {
    try {
        res.json({
            status: 'sucess',
            data: 'user login',
             });
    } catch (error) {
        res.json(error.message);
    }
});

//user id

app.get('/api/v1/users/:id', async() => {
    try {
        res.json({
            status: 'sucess',
            data: 'profile route',
             });
    } catch (error) {
        res.json(error.message);
    }
});

//all users

app.get('/api/v1/users', async() => {
    try {
        res.json({
            status: 'sucess',
            data: 'profile route',
             });
    } catch (error) {
        res.json(error.message);
    }
});

// delete

app.delete('/api/v1/users/:id', async() => {
    try {
        res.json({
            status: 'sucess',
            data: 'delete user route',
             });
    } catch (error) {
        res.json(error.message);
    }
});

//update

app.put('/api/v1/users/:id', async() => {
    try {
        res.json({
            status: 'sucess',
            data: 'update user',
             });
    } catch (error) {
        res.json(error.message);
    }
});


// error handlers middleware
// listen to server

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`server is up and listening on port ${PORT}`));