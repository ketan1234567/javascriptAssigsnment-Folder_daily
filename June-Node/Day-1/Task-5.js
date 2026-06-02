const express= require('express')

const app=express();

const mysql = require("mysql2/promise");



const db=mysql.createPool({
     host: "localhost",
  user: "root",
  password: "",
  database: "testdb"
})


app.listen(3000,()=>{
  console.log("Start the Server ");
})



// app.get("/",(req,res)=>{
// res.send("Home_Page")
// })


app.get("/users", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");

    if (rows.length > 0) {
      return res.status(200).json(rows);
    }

    return res.status(404).json({
      message: "Users not found"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error"
    });
  }
});