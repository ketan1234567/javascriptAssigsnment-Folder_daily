const { json } = require('express')
const jwt =require('jsonwebtoken')

function check_middle(req,res,next){
const authheaders=req.headers.authorization
//console.log(authheaders);
if (!authheaders) {
    res.status(401).json({
        Message:"Token is required"
    })
    return 
}

const token=authheaders.split(" ")[1]

try {

    const decode=jwt.verify(
        token,
         "ketan"
    )
    //console.log(decode);

    if (decode.user.role==="admin") {
        next()
    }else{
    res.status(403).json({
        message:"Foribbden"
    })

    }    
} catch (error) {
    res.status(401).json({
        error:error.message
    })
    
}



}

module.exports=check_middle