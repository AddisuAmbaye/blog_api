const mongoose = require('mongoose');

// create Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true,
    },
    description: { 
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: [true, 'Post category is required'],
    },
    numViews: [
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
     },
    ],
    likes: [
        {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',   
        },
    ],
    disLikes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        },
    ],
    user: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:[true, 'Please Author is required']   
        }
    ]
});