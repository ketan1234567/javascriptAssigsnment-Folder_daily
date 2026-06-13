const jwt = require("jsonwebtoken");

function check_Token(req, res, next) {
    const authHeader = req.headers.authorization; // when we taken token sometimes it taken of req.headers.authorization 
    // this is token is array 

    // Header missing
    if (!authHeader) {
        return res.status(401).json({
            message: "Access Denied. No token provided."
        });
    }

    const part = authHeader.split(" "); //authHeader is array that's why we have taken from part[1] 
    const token = part[1];

    // Token missing
    if (!token) {
        return res.status(401).json({
            message: "Token not found"
        });
    }


    // why we write here try cand catch block because of jwt.verify 
    //throw exception so that's why we have used try and catch block 

    try {
        const data = jwt.verify(token, "ketan");

        console.log(data);

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or Expired Token"
        });
    }
}

module.exports = check_Token;