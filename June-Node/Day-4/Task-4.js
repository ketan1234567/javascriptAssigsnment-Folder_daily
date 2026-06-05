const express= require('express')
const app= express()

const logger=require('./middleware')
const authMiddleware=require('./middleware-2')



app.get("/",(req,res)=>{
    console.log("Home_Page");
    
})

app.listen(3000,()=>{
    console.log("start server Running");
    
})

// app.get("/users/:id",(req,res)=>{
//     const id = parseInt(req.params.id)
// if (id===1) {
//     res.status(200).json({
//           id: 1,
//          product: "Laptop"

//     })
    
// } else if (isNaN(id)) {
//     res.status(400).json({
//         message:"Invalid id"
//     })
    
// } else {
//     res.status(404).json({
//         message:"User Id Not Found"
//     })
// }
// })
app.use(express.json())

app.get("/token", authMiddleware,(req,res)=>{
//    const demo=req.query.abc
//    console.log(demo);
   
   
})

app.get("/users",(req,res)=>{
  const name=req.query.name
 // console.log(name);
  
if (name) {
    res.status(200).json({
        name:"Ketan"
    })
} else {
    
}
   
   
})


app.get("/age",(req,res)=>{
  const id=parseInt(req.query.age)
 // console.log(name);
  //console.log(id);
  
if (id>=18) {
    res.status(200).json({
         "message": "Eligible"
    })
} else{
        res.status(401).json({
          "message": "Not Eligible"
    })

}
   
   
})