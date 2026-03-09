const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    donor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    bloodGroup:{
        type:String,
        required:true
    },

    unitsDonated:{
        type:Number,
        required:true
    },

    donationDate:{
        type:Date,
        default:Date.now
    },
    location:{
        type:String
    },
    drive:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Drive"
    }
},{timestamps:true});

module.exports = mongoose.model("Donation",donationSchema);