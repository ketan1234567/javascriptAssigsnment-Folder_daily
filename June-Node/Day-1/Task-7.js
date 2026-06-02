const express= require('express')

const app=express();

const mysql = require("mysql2/promise");

const path=require('path');


// filename


path.filename("Task-7.js")



// dirname
console.log(path.dirname(__dirname));

// extension
console.log(path.extname("Task.js"));
// basename
console.log(path.basename("Task.js"));



