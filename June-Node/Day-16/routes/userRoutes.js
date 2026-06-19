const express=require('express')
const routes=express.Router()
const {ShowAllusers,show_one_user, adduser, Update_one_user, delete_one_user}=require('../controller/UserCotroller')

routes.get("/users",ShowAllusers)
routes.get("/users/:id",show_one_user)
routes.put("/users/:id",Update_one_user)
routes.delete("/users/:id",delete_one_user)
routes.post("/users",adduser)

module.exports=routes