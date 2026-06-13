const express=require('express')

const userroutes=require('./routes/userRoutes')
const logger=require('./middleware/logger')
const app=express()


app.listen(3000,()=>{
    console.log("start_Running_Server");
})

app.use(logger)
app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Server_Running");
    
})

app.use("/api",userroutes)


function divide(a,b){
    try {
        if (a==0  || b==0) {
    throw new Error("Cannot divide by zero");
    return
    } 
    return a/b;
        
    } catch (error) {
        console.log(error);
        
    }
    
}


console.log(divide(10,0));
