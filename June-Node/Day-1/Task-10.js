const express= require('express')

const app=express();

const fs = require("fs/promises");




async function readData() {
  const data =   fs.readFile("report.txt","utf8");
  console.log(data);
}

readData();