const express= require('express')
const app=express()


app.listen(3000,()=>{
    console.log("start_the_Server");   
})

app.get("/",(req,res)=>{
 res.send("Home_page")
})

app.get("/users", async (req, res) => {
  const users = await User.find();

  if (users>0) {

    res.status(200).json({
    count: users.length,
    data: users
  });
  } else {
    console.log("Users Don't have Data");
    
    
  }


});