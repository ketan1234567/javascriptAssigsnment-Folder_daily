function getUser(id, callback) {
  const users = [
    { id: 1, name: "Ketan" },
    { id: 2, name: "Rahul" }
  ];

if (id) {
    callback(null,
   users.find((item=>{
     return item.id===id
     
   })))
   
} else {
callback("userName Not Foud",null)

   
}

 

  // Find user and return via callback
}

getUser(1,(err,data)=>{
    if (!data) {
      console.log("Employee not found");  
    } 
    console.log(data);
    
    return data


   
})