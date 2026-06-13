
const jwt =require('jsonwebtoken')
const users = [
    {
     id:1,   
  "name":"rahul",
  "email":"rahul@gmail.com"
},
  {
    "id": 2,
    "name": "ketan",
    "email": "ketan@gmail.com"
  }
]

const getUser=async(req,res)=>{
    try {
        res.status(200).json(users)
   } catch (error) {
        console.log(error);
        
    }
}

const getOneUser=async(req,res)=>{
    try {
    const id=parseInt(req.params.id)

    const user= users.find(item=>item.id===id)

    if (!user) {
        res.status(404).json({
            message:"user not Found"
        })
    }
res.status(200).json(user)
 
   } catch (error) {
        console.log(error);
        
    }
}


const login_create=async(req,res)=>{
    try {
      
         // console.log(req.body.email);
const email=req.body.email

const email1=users.find(item=>item.email===email)
    if (email===email1.email) {
           const token=jwt.sign(
       {
   email

},
        "ketan",
        {expiresIn:"1h"}
    )
  //console.log("EMAIL =", email);
//console.log("TOKEN =", token);
    

res.status(200).json({
    message:"Login Success",
    token
}) 
    }else{
        res.status(404).json({
            message:"email not Found"
        })
    }


 
   } catch (error) {
        console.log(error);
        
    }
}


const createRegister=async(req,res)=>{
    try {
const {name,email}=req.body

    if (name=="" && ! email=="") {
            res.status(404).json({
            message:"Name required && Email required"
        })

    }
    const Register_demo={
        id:users.length+1,
        name:name,
        email:email
    }

    users.push(Register_demo)

    res.status(200).json({
        message:"Register Sucessfully",
        user:users
    })

 
   } catch (error) {
        console.log(error);
        
    }
}



module.exports ={
    getUser,
   getOneUser,
   login_create,
   createRegister
     
    //  deleteUser,
    // updateUser
}