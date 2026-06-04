const express= require('express');
const app=express()

require('dotenv').config();
app.listen(3000,()=>{
    console.log("start Server ");
    
})

app.get("/",(req,res)=>{
res.send("Home_Page")
})

// app.get("/users/:id",(req,res)=>{
//     const id=parseInt(req.params.id)
//     if (id===1) {
//         res.status(200).json({
//             id:1,
//             Message:"This is User Ketan"
//         })
//     } else if(isNaN(id)) {
//  res.status(400).json({
//     Message:"Invalid ID"
//  })
//     }else{
//         res.status(404).json({
//             Message:"User Not Found"
//         })
//     }

// })

function getData() {
  return{
    name: "Ketan"
  }
}



console.log(getData());


console.log(process.pid); // unique id create node js

console.log(process.cwd()); // current_Directory or Current Folder create



// if we are accessing .env varibles so you must install packages 
//npm install dotenv
// after then you have to access only that time  you have to acess otherwise varible value undefined

console.log(process.env.PORT);   // this is most important of node js Environment Variables
console.log(process.env.JWT_SECRET);




console.log("start");

//process.exit()  // stop node js immediately they can't run end  node 

console.log("END");