const express=require('express')
const router=express.Router()
const {getUser,getOneUser,createUser,deleteUser,updateUser}=require('../controllers/userController')


router.get("/users",getUser)
router.get("/users/:id",getOneUser)
 router.post("/users",createUser)



module.exports=router