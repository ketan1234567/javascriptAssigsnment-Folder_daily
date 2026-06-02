function loginUser(user) {
  return new Promise((resolve, reject) => {
    
      resolve({username:user})

  })
}

function fetchProfile(user) {
  return new Promise((resolve, reject) => {
  
      resolve({...user,Profile:{ Address:"sai Vihar Udgir"}})
    
  })
}


function posts(user) {
  return new Promise((resolve, reject) => {

      resolve({...user,Post:["Ketan_deshmukh_Post_Node_js"]})

  })
}

loginUser("ketan").then((value)=>{
  return value
}).then((value)=>{
  return value
})




// async function AllUserStatus() {
//   try {
//     const User=await loginUser("ketan")
//     const F_etch= await  fetchProfile(User)
//     const Post= await posts(F_etch)

//     console.log(Post);

//     return Post
//   } catch (error) {
//     console.log(error);
    
    
//   }
  
// }

// AllUserStatus()