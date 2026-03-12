const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },

    password:{
        type:String,
        required:true
    },

    bloodGroup:{
        type:String,
        required:true
    },
    
    age:{
        type:Number
    },

    isDonor:{
        type:Boolean,
        default:false
    },

    lastDonationDate:{
        type:Date
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("User",userSchema);