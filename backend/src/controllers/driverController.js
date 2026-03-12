const Drive = require("../models/Drive")

// drive creation (admin only)
const createDrive = async (req, res) => {

    try {

        const { title,organizer, location,city,driveDate,capacity} = req.body

        const drive = new Drive({
            organizer: req.user._id,
            title,
            organizer,
            location,
            city,
            driveDate,
            capacity
        })

        await drive.save()

        res.json({
            success: true,
            message: "Drive created successfully",
            drive
        })

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

//get all drive

const getAllDrives = async (req, res) => {

    try {
        const drives = await Drive.find()
            .populate("organizer", "name email")
            .populate("registeredDonors", "name bloodGroup")

        res.json({
            success: true,
            drives
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

//register for drive
const registerForDrive = async (req, res) => {
    try {
        const drive = await Drive.findById(req.params.id)

        if (!drive) {
            return res.json({
                success: false,
                message: "Drive not found"
            })
        }

        if (drive.registeredDonors.includes(req.user._id)) {
            return res.json({
                success: false,
                message: "Already registered for this drive"
            })
        }

        drive.registeredDonors.push(req.user._id)

        await drive.save()

        res.json({
            success: true,
            message: "Registered for drive",
            drive
        })

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    createDrive,
    getAllDrives,
    registerForDrive
}