function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id>0) {
                resolve({id:id,name:"ketan"})
            } else {
                reject("Invalid User ID")
            }
            
        }, 2000);
    })
}
getUser(1).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
    
})