    const employees = [
  { id: 1, name: "Ketan" },
  { id: 2, name: "Rahul" }
];

function getEmployee(id, callback){

   if (id) {
    callback(null,
        employees.find(item=>item.id==id))
   } else {
callback("Employee not found",null)
   }

}

getEmployee(10,(error,data)=>{
 if (error) {
    console.log("Error",error);
        return
 }
    if (!data) {
      console.log("Employee not found");
      
        
    } else {
        
    }
    console.log(data);
    
    return data

    
 
})