const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")
const adminOnly = require("../middleware/adminMiddleware")

const {createDrive,getAllDrives,registerForDrive} = require("../controllers/driverController")

router.post("/create",protect,adminOnly,createDrive)
router.get("/all",protect,getAllDrives)
router.post("/register/:id",protect,registerForDrive)

module.exports = router