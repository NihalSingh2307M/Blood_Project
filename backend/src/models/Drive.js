const mongoose = require("mongoose");

const driveSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    organizer:{
        type:String
    },

    location:{
        type:String,
        required:true
    },
    
    city:{
        type:String
    },

    driveDate:{
        type:Date,
        required:true
    },

    capacity:{
        type:Number
    },

    registeredDonors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
},{timestamps:true});

module.exports = mongoose.model("Drive",driveSchema);