const express= require('express')

const app=express();


app.listen(3000,()=>{
  console.log("Start the Server ");
})

// app.get("/",(req,res)=>{
// res.send("Home_Page")
// })


app.get("/users/:id",(req,res)=>{

  const id= parseInt(req.params.id);

  if (id>0) {
    console.log("200 block");
    res.status(200).json({
      id:id,
      User:"Ketan_Deshmukh"
    })
  } else if (isNaN(id)) {
     res.status(400).json({
      Message:"invalid ID"
    })
  }  else {
    console.log("404 block");
    res.status(404).json({
      Message:"User not Found"
    })
  }
  

})