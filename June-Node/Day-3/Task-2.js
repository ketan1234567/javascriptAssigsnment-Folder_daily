 function getPost(userId){
return new Promise((resolve, reject) => {
    if (userId===1) {
        resolve({userId:1,title:"Node js Basic"})
    } else {
        reject("UserId is invalid.")
    }
})
}
getPost(-1).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
    
})