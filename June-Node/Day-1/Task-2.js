function getUser(id){
    return new Promise((resolve, reject) => {
      if (id>0) {
        resolve("User Exists")
      } else {
        reject("User Not Found")
      }
    })
    

}

getUser(1).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
    
})