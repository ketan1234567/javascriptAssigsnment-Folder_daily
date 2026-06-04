function getUser(id, callback){

    if (id===1) {
   callback(null,{id:id,name:"Ketan"})
    } else {
        callback("invalid User Id",null)
    }

}

getUser(-1,(err,user)=>{
    if (err) {
    console.log("Error",err);
    return
    }
    console.log(user);
    
})