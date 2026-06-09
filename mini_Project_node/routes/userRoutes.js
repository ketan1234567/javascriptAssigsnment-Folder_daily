const express=require('express')
const router=express.Router()
const {UpdatedUser,getuser,oneidDatagetting,created_User, delete_User, SearcUser}= require('../Controller/userController')



router.get("/users",getuser)
router.get("/users/:id",oneidDatagetting)
router.post("/users",created_User)
router.put("/users/:id",UpdatedUser)
router.delete("/users/:id",delete_User)
router.get("/search",SearcUser)




module.exports=router