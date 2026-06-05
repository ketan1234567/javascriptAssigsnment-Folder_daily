function getUser(id, callback){

    
    if (id===1) {
        callback(null,{id:1,name:"Ketan"})
    } else {
       callback("id not found",null)
        
    }
}

getUser(0,(errr,data)=>{
    if (errr) {
        console.log(errr);
      return;  
    } 
    console.log(data);
    
    
})