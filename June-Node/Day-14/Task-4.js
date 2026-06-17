const express=require('express')
const app=express()

const users=[
  {
    "id":1,
    "name":"Ketan"
  },
  {
    "id":2,
    "name":"Rahul"
  }
]

app.listen(3000,()=>{
  console.log("start_server_Running");
})

app.use(express.json())

app.get("/users",(req,res)=>{
 try {
  res.status(200).send(users)
  
 } catch (error) {
  console.log(error.message);
  
 }
})