function authMiddleware(req,res,next) {
 const demo=req.query.abc

 const id=parseInt(req.query.abc)

  if (id==123) {
next()
res.status(200).json({
  message:"This is Correect_id"
})
        
  } else {
    res.status(401).json({
      Message:"Unauthorized"
    })
    
  }
}

module.exports=[
  authMiddleware
]

