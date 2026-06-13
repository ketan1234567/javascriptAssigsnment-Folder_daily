async function fetchUsers(){
    try {
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("user not found");
            
        }
        const data=  await response.json()
        //console.log(data);
       const result= data.map((item)=>{
            return {
                id:item.id,
                name:item.name,
                email:item.name
            }
        })
        return result

        //return response.json()
        
    } catch (error) {
        console.log(error);
        
        
    }
}

fetchUsers().then((value)=>{
    console.log(value);
    
}).catch((error)=>{
    console.log(error);
    
})