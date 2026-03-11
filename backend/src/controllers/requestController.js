const BloodRequest = require("../models/BloodRequest")

//create request (blood)

const createRequest = async(req,res) =>{

    try{
        const {patientName,bloodGroup,unitsRequired,hospitalName,city,contactNumber} = req.body

        const request = new BloodRequest({
            requester:req.user._id,
            patientName,
            bloodGroup,
            unitsRequired,
            hospitalName,
            city,
            contactNumber
        })

        await request.save()

        res.json({
            success:true,
            message:"Blood request created successfully",
            request
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

//get all request(Blood)

const getAllRequests = async(req,res) =>{
    try{
        
        const requests = await BloodRequest.find().populate("requester","name email")

        res.json({
            success:true,
            requests
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

//blood request fulfill

const fulfillRequest = async (req,res) =>{
    try{

        const request = await BloodRequest.findById(req.params.id)

        if(!request){
            return res.json({
                success:false,
                message:"Request not found"
            })
        }
        request.status="fulfilled"

        await request.save()

        res.json({
            success:true,
            message:"Request fulfilled",
            request
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

module.exports = { createRequest,getAllRequests,fulfillRequest}