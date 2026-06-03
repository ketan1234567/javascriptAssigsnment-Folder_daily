const express = require('express')
const app = express()
const mysql = require("mysql2/promise");

const {verifyToken}=require('./verifyToken-Middleware')

var jwt = require('jsonwebtoken');

app.listen(3000, () => {
    console.log("Start_Server");
})

const db=mysql.createPool({
     host: "localhost",
  user: "root",
  password: "",
  database: "testdb"
})
app.get("/", (req, res) => {
    res.send("Home_Pages")
})

app.post("/login",(req,res)=>{
   const { username,password }=req.body;

if (username==="ketan" && password==="123") {

const token=jwt.sign({
   id:1,
   username:"ketan",
   role:"user"
},
"mysecretkey"

)

res.status(200).json({
   message:"Login Sucess",
   token:token
})

} else {
   res.status(401).json({
      message:"User name and Password is Incorrect "
   })
}

})

app.get( "/profile",verifyToken,(req,res)=>{
   console.log(req.user);
   
res.json({
   message:"Welcome",
   user:req.user
})
   }
)