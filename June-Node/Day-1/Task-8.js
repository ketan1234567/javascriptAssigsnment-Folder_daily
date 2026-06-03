const express= require('express')

const app=express();

const {checkAdmin}=require('./middleware')

const mysql = require("mysql2/promise");



const db=mysql.createPool({
     host: "localhost",
  user: "root",
  password: "",
  database: "testdb"
})


app.listen(3000,()=>{
  console.log("Start the Server ");
})



app.get("/",(req,res,next)=>{
res.send("Home_Page")

})



app.get("/profile", checkAdmin, (req, res) => {
    res.send("Welcome Admin");
});