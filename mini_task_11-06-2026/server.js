const express=require('express')

const userroutes=require('./routes/userRoutes')
const logger=require('./middleware/check_token')
const app=express()


app.listen(3000,()=>{
    console.log("start_Running_Server");
})




app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Server_Running");
    
})

app.use("/api",userroutes)



