const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")
const { createDonation ,getMyDonations,getAllDonations} = require("../controllers/donationController")

router.post("/create", protect, createDonation)
router.get("/my",protect,getMyDonations)
router.get("/all",protect,getAllDonations)

module.exports = router