const express=require('express')
const router=express.Router()
const {getUser,getOneUser,createUser,deleteUser,updateUser,login_create,createRegister}=require('../controllers/userController')
const check_token=require('../middleware/check_token')

router.get("/register",check_token,getUser)
router.get("/users/:id",getOneUser)
 router.post("/Login",login_create)
 router.post("/register",createRegister)


module.exports=router