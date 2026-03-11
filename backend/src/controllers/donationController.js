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

module.exports = {createDonation}