const mongoose = require("mongoose")

async function connectDb(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to Db")
}

module.exports = connectDb;