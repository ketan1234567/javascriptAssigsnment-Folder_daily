const express=require('express')
const app=express()
const UserRoute=require('./routes/userRoutes')



app.use(express.json())

app.use("/api",UserRoute)


app.listen(3000,()=>{
    console.log("start_Server_Running");
    
})

