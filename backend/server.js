require("dotenv").config();
const app = require("./src/app")
const connectDb = require("./src/config/db")
const authRoutes = require("./src/routes/authRoutes")
const donationRoutes = require("./src/routes/donationRoutes")
const requestRoutes  = require("./src/routes/requestRoutes")
const reportRoutes = require("./src/routes/reportRoutes")
const driveRoutes = require("./src/routes/driveRoutes")


connectDb()

//server uploaded files

app.use("/upload",require("express").static("upload"))

//Routes
app.use("/api/auth",authRoutes);
app.use("/api/donation",donationRoutes)
app.use("/api/request",requestRoutes)
app.use("/api/report",reportRoutes)
app.use("/api/drive",driveRoutes)



app.listen(3000,()=> {
    console.log("Server is running on 3000")
})