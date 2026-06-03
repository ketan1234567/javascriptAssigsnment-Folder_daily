const express= require('express')

const app=express();

const fs = require("fs/promises");



fs.writeFile("report.txt",'JavaScript Progress Report',(err,data)=>{
if (err) {
  console.log(err);
  return
}
})




async function ReadData() {
  try {
    const data= await fs.readFile('report.txt','utf-8')
    console.log(data);
    return data
  } catch (error) {
    console.log(err);
    
    
  }
  
}
ReadData()
