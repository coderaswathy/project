const express = require("express");
const app = express();
const PORT = 5000
const db = require('./db')




app.listen(PORT,()=>{
    console.log("server is running a ${PORT} port")
})