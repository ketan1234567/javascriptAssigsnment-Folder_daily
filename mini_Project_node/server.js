const express=require('express')
const app=express()
const userroute=require('./routes/userRoutes')

const logger=require('./middleware/logger')

app.listen(3000,()=>{
    console.log("start_server_Runing");
    
})
app.use(logger)
app.use(express.json());

app.use("/api",userroute)

app.get("/",(req,res)=>{
res.send("Server Running")
})