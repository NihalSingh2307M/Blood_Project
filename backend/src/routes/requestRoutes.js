const express = require("express")
const router = express.Router()
const protect = require("../middleware/authMiddleware")

const {createRequest,getAllRequests,fulfillRequest}  = require("../controllers/requestController")

router.post("/create",protect,createRequest)
router.get("/all",protect,getAllRequests)
router.put("/fulfill/:id",protect,fulfillRequest)

module.exports = router