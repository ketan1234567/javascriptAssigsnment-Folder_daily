// function getUser(id, callback) {
//   setTimeout(() => {
//     if (id > 0) {
//       callback(null, {
//         id,
//         username: "Ketan"
//       });
//     } else {
//       callback("Invalid User ID", null);
//     }
//   }, 1000);
// }

function getUser(id) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (id>0) {
            resolve({id,username:"ketan"})
        } else {
            reject("Invalid User ID")
        }
    }, 1000);
 })
}

getUser(1).then((value)=>{
    console.log(value);
    
}).catch((error)=>{
    console.log(error);
    
})