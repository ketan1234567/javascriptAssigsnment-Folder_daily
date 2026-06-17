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

async function fetchUser(){
  try {
    const data= await getUser(1)
    console.log(data);
    
    return data
    
  } catch (error) {
    console.log(error);
    
    
  }
}
fetchUser()