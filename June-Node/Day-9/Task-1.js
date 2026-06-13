const employees = [
  { id: 1, name: "Ketan" },
  { id: 2, name: "Akshay" },
  { id: 3, name: "Krushna" }
];

function getEmployee(id,callback){
 const user=employees.find(item=>item.id===id)

 if (!user) {
  callback("User not found",null)
 } 
 callback(user,null)
}
getEmployee(10,(error,data)=>{
    if (error) {
        console.log(error);
        return 
    }
    console.log(data);
    
})