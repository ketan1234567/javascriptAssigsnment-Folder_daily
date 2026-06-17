const express=require('express')
const allempyoee = require('../controllers/UserController')
const route=express.Router()


// route.post("/register")

// route.post("/login")

route.get("/employees",allempyoee)
// route.get("/employees/:id")
// route.post("/employees")
// route.put("/employees/:id")
// route.delete("/employees/:id")


module.exports=route