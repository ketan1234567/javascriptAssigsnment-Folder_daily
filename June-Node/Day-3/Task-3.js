 function getPost(userId){
return new Promise((resolve, reject) => {
    if (userId===1) {
        resolve({userId:1,title:"Node js Basic"})
    } else {
        reject("UserId is invalid.")
    }
})
}

async function showPost(){
    try {
        const Data=await getPost()
        console.log(Data);
        return Data;
        
    } catch (error) {
        console.log(error);
        
        
    }
}

showPost()