const express=require('express')
const app=express()
const userRoutes=require('./Routes/UserRoutes')


app.use(express.json())

app.use("/api",userRoutes)

app.listen(3000,()=>{
    console.log("Start_Server_Running");
    
})