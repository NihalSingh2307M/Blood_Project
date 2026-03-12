const multer = require("multer")
const cloudinary = require("../config/cloudinary")
const { CloudinaryStorage } = require("multer-storage-cloudinary")

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: "blood_reports",
            resource_type: "raw",
            public_id: Date.now() + "-" + file.originalname
        }
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/pdf") {
            cb(null, true)
        } else {
            cb(new Error("Only PDF files are allowed"), false)
        }
    }
})

module.exports = upload