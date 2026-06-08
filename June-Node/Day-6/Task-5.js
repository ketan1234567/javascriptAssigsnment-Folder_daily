const express= require('express')
const app=express()


app.listen(3000,()=>{
    console.log("start_the_Server");   
})

app.get("/",(req,res)=>{
 res.send("Home_page")
})

app.get("/student",(req,res)=>{
const { name, age } = req.query;
    //console.log(name);
    c//onsole.log(age);

    
     //   console.log(!undefined);
    if (!name || ! age ) {
      //  console.log("inside comes if");
        res.status(400).json({
            Message:"All fields are required"
        })
    }else{
     
         res.status(200).json({
            name:"Ketan",
            age:25
        })

    }
    

})