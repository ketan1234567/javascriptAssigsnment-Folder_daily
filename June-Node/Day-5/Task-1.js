function fetchUser(){
    return new Promise((resolve, reject) => {
        console.log("User fetched successfully");
        
        resolve({id:1,name:"ketan"})
    })
}
fetchUser().then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
    
})