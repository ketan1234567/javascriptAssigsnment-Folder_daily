

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Received")
    }, 2000);
  })
}

 async function  demo() {
  try {
    const data= await fetchData()
   return data
    
  } catch (error) {
    console.log(error);
    
    
  }
  
 }
demo().then((value)=>{
  console.log(value);
  
}).catch((error)=>{
  console.log(error);
  
})


// function fetchData(callback) {
//     setTimeout(() => {
//         callback(null,"Data Received");
//     }, 2000);
// }
// fetchData((error,value)=>{
//   console.log(value);
  
// })