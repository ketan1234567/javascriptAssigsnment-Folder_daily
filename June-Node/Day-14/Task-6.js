const express= require('express')
const app=express()


app.listen(3000,()=>{
    console.log("start_the_Server");   
})

app.get("/",(req,res)=>{
 res.send("Home_page")
})

const users = [
  { id: 1, name: "Ketan" },
  { id: 2, name: "Rahul" }
];

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((item) => {
   return  item.id === id;
  });

  if (!user) {
    return res.status(404).json("User Not Found")
  }


 return  res.status(200).json(user)
});