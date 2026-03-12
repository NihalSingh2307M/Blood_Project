const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")
const adminOnly = require("../middleware/adminMiddleware")
const upload = require("../middleware/uploadMiddleware")

const {
    uploadReport,
    getMyReports
} = require("../controllers/reportController")

router.post(
    "/upload/:userId",
    protect,
    adminOnly,
    upload.single("report"),
    uploadReport
)

router.get("/my", protect, getMyReports)

module.exports = router