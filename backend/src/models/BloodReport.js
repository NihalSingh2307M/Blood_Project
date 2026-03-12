const mongoose = require("mongoose")

const bloodReportSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    reportUrl: String,

    uploadedAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("BloodReport", bloodReportSchema)