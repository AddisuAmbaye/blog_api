const mongoose = require('mongoose');

//create schema
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'First Name is required'],
    },
    lastname:{
        type:String,
        required:[true,'Last Name is required'],
    },
    profilPhoto:{
        type:String,
    },
    email:{
        type:String,
        required:[true, 'Password is requires'],
    },
    postCount:{
        type:Number,
        default: 0,
    },
    isBlocked:{
        type:Boolean,
        default: false,
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
    role:{
        type:String,
        enum:['Admin','Guest',"Editor"],
    },
    viewedBy:[
        {
            type:mongoose.schema.Types.ObjectId,
            ref:"User",
        },
    ],
    followers:[
        {
            type:mongoose.schema.Types.ObjectId,
            ref:"User",
        },
    ],
    following:[
        {
            type:mongoose.schema.Types.ObjectId,
            ref:"User",
        },
    ],
    active:{
        type:Boolean,
        default:false,
    },
    posts:[
        {
            type: mongoose.schema.Types.ObjectId,
            ref:'post'
        },
    ],
});