const express= require('express')

const app=express();

const mysql = require("mysql2/promise");

const fs=require('fs');



fs.writeFile('student.txt','My name is Ketan',(err,data)=>{
  if (err) {
    console.log(err);
    return
  }
});

fs.readFile('student.txt','utf-8',(err,data)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log(data);
  
})


