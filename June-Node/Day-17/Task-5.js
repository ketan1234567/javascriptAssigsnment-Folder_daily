const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
 const token_one=req.headers.authorization

  if (!token) {
    return res.status(401).json({
      message: "Token Required",
    });
  }

  const token = token_one.split(" ")[1];
try {
     const decoded=jwt.verify(token,"secretkey")
} catch (error) {
     return res.status(401).json({
      message: error.message,
    });
}


}

// What happens if authorization header is missing?
// if you are missing authorization header how can get token 
// sometime users send that time you have to get token then work  also 
//if  req.headers.authorization is missing  we have to print token is required 
// then we have conevert   const token_1 = token.split(" ")[1]; beacuse this is array 
// you have separete " " split() function you are getting this token 
 
//
// What happens if token is invalid?
// it  means you token are not you can't get properlty  if someone changes token in one charatere 
//that error is coming 

// Why can "Cannot set headers after they are sent" occur?
// if you sending twise response that time we have to fase this errors
// exmple: suppose we have send res.send() already after that we have send 
// res.json() that time we are getting this error
//
// How would you fix it?

//  