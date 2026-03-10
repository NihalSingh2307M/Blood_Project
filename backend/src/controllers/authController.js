const User = require("../models/User")
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/generatedToken")

//Register User-->function
const registerUser = async (req, res) => {
    try {

        const { name, email, password, bloodGroup } = req.body;
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new User({
            name,
            email,
            password:hashedPassword,
            bloodGroup
        });

        await user.save();

        res.json({
            success: true,
            message: "User registered successfully"
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

//Login User--->Function

const loginUser = async (req,res)=>{
    try{

        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.json({
                success:false,
                message:"User not found"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({
                success:false,
                message:"Invalid password"
            })
        }

        res.json({
            success:true,
            message:"Login successful",
            token: generateToken(user._id)
        })

    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

module.exports = { registerUser, loginUser }