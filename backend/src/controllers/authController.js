const User = require("../models/User")

const registerUser = async(req,res)=>{
    try{

        const {name,email,password,bloodGroup} = req.body;

        const user = new User({
            name,
            email,
            password,
            bloodGroup
        });

        await user.save();

        res.json({
            success:true,
            message:"User registered successfully"
        });

    }catch(error){
        res.json({
            success:false,
            message:error.message
        });
    }
}

module.exports = { registerUser }