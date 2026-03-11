const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")
const { createDonation } = require("../controllers/donationController")

router.post("/create", protect, createDonation)

module.exports = router