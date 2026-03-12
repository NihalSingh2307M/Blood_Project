const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")
const { createDonation ,getMyDonations,getAllDonations,donorLeaderboard,bloodStats} = require("../controllers/donationController")

router.post("/create", protect, createDonation)
router.get("/my",protect,getMyDonations)
router.get("/all",protect,getAllDonations)
router.get("/leaderboard",donorLeaderboard)
router.get("/stats",bloodStats)


module.exports = router