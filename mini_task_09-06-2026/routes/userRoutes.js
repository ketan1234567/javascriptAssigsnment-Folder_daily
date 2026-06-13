const express=require('express')
const router=express.Router()
const {getUser,getOneUser,createUser,deleteUser,updateUser}=require('../controllers/userController')


router.get("/users",getUser)
router.get("/users/:id",getOneUser)
router.post("/users",createUser)
router.delete("/users/:id",deleteUser)
 router.put("/users/:id",updateUser)


module.exports=router