// function getUser(id, callback) {
//   setTimeout(() => {
//     if (id === 1) {
//       callback(null, { id: 1, name: "Ketan" });
//     } else {
//       callback("User Not Found", null);
//     }
//   }, 1000);
// }

function getUser(id) {
    return new Promise((resolve, reject) => {
        if (id===1) {
            resolve({id:id,name:"Ketan"})
        } else {
            reject("User Not Found")
        }
    })
    
}

getUser(1).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})