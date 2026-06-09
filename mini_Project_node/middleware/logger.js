function logger(req,res,next){
    console.log("Request Received");
    next()
}

module.exports=logger