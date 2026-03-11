require("dotenv").config();
const app = require("./src/app")
const connectDb = require("./src/config/db")
const authRoutes = require("./src/routes/authRoutes")
const donationRoutes = require("./src/routes/donationRoutes")

connectDb()

//Routes
app.use("/api/auth",authRoutes);
app.use("/api/donation",donationRoutes)





app.listen(3000,()=> {
    console.log("Server is running on 3000")
})