function getUsers(){
return new Promise((resolve, reject) => {
    resolve({id:1,name:"ketan"})
})
}

function getProducts(){
    return new Promise((resolve, reject) => {
    resolve({id:1,name:"laptop"})
})

}

async function showAllusers() {
  const result =  await Promise.all([getUsers(),getProducts()])  

  result.map((item)=>{
   //console.log(item[0]);
   return{
    // users:[item[1]],
    // Product:[item[1]]
   }
   
  })

  return result
}


showAllusers().then((value)=>{
    console.log(value);
    
})





