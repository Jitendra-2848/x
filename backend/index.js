require("dotenv").config()
const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");
const route = require("./route/route");
const cookieParser = require("cookie-parser");
const app = express()
app.use(cookieParser())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
}))
const database = mongo.connect("mongodb://127.0.0.1:27017/Agrinova")
.then((res)=>{
    console.log("connected");
})
.catch((error)=>{
    console.log(error.message)
})
app.use("/",route);
const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log("Server is on!")
})


