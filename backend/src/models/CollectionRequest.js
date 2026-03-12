const mongoose = require("mongoose")

const collectionRequestSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    address:String,
    city:String,

    preferredDate:Date,

    status:{
        type:String,
        enum:["pending","approved","collected"],
        default:"pending"
    }
},{timestamps:true})

module.exports = mongoose.model("CollectionRequest",collectionRequestSchema)