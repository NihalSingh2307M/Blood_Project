const BloodReport = require("../models/BloodReport")

// admin uploads pdf report
const uploadReport = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            })
        }

        const report = new BloodReport({
            user: req.params.userId,
            reportUrl: req.file.path
        })

        await report.save()

        res.json({
            success: true,
            message: "Report uploaded successfully",
            report
        })

    } catch (error) {
    console.log("UPLOAD ERROR:")
    console.log(error)
    console.log(JSON.stringify(error, null, 2))

    res.status(500).json({
        success: false,
        message: error.message || "Upload failed"
    })
}
}


// user views their reports
const getMyReports = async (req, res) => {
    try {

        const reports = await BloodReport.find({
            user: req.user._id
        })

        res.json({
            success: true,
            reports
        })

    } catch (error) {

        console.log("FETCH REPORT ERROR:", error)

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    uploadReport,
    getMyReports
}