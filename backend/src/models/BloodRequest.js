const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema({

    requester:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    patientName:{
        type:String,
        required:true
    },

    bloodGroup:{
        type:String,
        required:true
    },

    unitsRequired:{
        type:Number,
        required:true
    },

    hospitalName:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    contactNumber:{
        type:String
    },
    status:{
        type:String,
        enum:["pending","fulfilled"],
        default:"pending"
    }
    
},{timestamps:true});

module.exports = mongoose.model("BloodRequest",bloodRequestSchema);