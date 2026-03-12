const Donation = require("../models/Donation");
const { create } = require("../models/User");

//create donation
const createDonation = async(req,res) =>{

    try{

        const {bloodGroup,unitsDonated,location,drive} = req.body;

        const donation = new Donation({
            donor:req.user._id,
            bloodGroup,
            unitsDonated,
            location,
            drive
        })

        await donation.save()

        res.json({
            success:true,
            message:"Donation recorded successfully",
            donation
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

//get donation single user-->api/donation/my--(doantion for logged in user)

const getMyDonations = async(req,res) =>{
    try{

        const donations = await Donation.find({donor:req.user._id})

        res.json({
            success:true,
            donations
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

//get all donation --->api/donation/all

const getAllDonations = async(req,res) =>{
    try{

        const donations = await Donation.find().populate("donor","name email")
        res.json({
            success:true,
            donations
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

//Donor LeaderBoard

const donorLeaderboard = async(req,res) =>{
    try{
        const leaderboard = await Donation.aggregate([
            {
                $group:{
                    _id:"$donor",
                    totalUnits:{$sum:"$unitsDonated"}
                }
            },
            {
                $sort:{totalUnits:-1}
            },
            {
                $lookup:{
                    from:"users",
                    localField:"_id",
                    foreignField:"_id",
                    as:"donor"
                }
            },
            {
                $unwind:"$donor"
            },
            {
                $project:{
                    _id:0,
                    name:"$donor.name",
                    bloodGroup:"$donor.bloodGroup",
                    totalUnits:1
                }
            }
        ])

        res.json({
            success:true,
            leaderboard
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {createDonation,getMyDonations,getAllDonations,donorLeaderboard}