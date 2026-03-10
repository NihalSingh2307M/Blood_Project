require("dotenv").config();
const app = require("./src/app")
const connectDb = require("./src/config/db")
const authRoutes = require("./src/routes/authRoutes")

connectDb()

//Routes

app.use("/api/auth",authRoutes);

app.listen(3000,()=> {
    console.log("Server is running on 3000")
})