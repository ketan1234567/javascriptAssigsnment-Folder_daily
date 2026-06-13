const employees = [
  { id: 1, name: "Ketan" },
  { id: 2, name: "Akshay" },
  { id: 3, name: "Krushna" }
];
function getEmployeePromise(id){


  return new Promise((resolve, reject) => {
      const user=employees.find(item=>item.id===id)

  if (!user) {
 reject("User not Found")
  }
  resolve(user)
  })



}

getEmployeePromise(10).then((value)=>{
  console.log(value);
}).catch((error)=>{
  console.log(error);
  
})