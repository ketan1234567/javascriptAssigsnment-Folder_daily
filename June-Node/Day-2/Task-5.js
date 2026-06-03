const express = require('express')
const app = express()
const mysql = require("mysql2/promise");

app.listen(3000, () => {
    console.log("Start_Server");
})

const db=mysql.createPool({
     host: "localhost",
  user: "root",
  password: "",
  database: "testdb"
})
app.get("/", (req, res) => {
    res.send("Home_Pages")
})

app.get("/products", async (req, res) => {

   const [products] = await db.query(
      "SELECT * FROM users"
   );

   if(products.length>0){
      res.send(products);
   }else{
    res.status(400).json({
        message:"Invalid all Records"
    })
   }

});