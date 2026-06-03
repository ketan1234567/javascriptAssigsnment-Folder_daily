const express= require('express')

const app=express();

const mysql = require("mysql2/promise");



function checkAdmin(req,res,next) {
const role = req.query.role;
  if (role=="admin") {
next()
  }else {

   res.json({
    message:"Access Denied"
   })
    
  }
  
}

module.exports={
  checkAdmin
}


