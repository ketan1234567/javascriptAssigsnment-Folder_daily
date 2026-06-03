function loginUser(username) {

    return  new Promise((resolve, reject) => {
        resolve({ Username:username})
    })
    
}

function getProfile(user) {
        return  new Promise((resolve, reject) => {
        resolve({ ...user, profile: { city: "Udgir" },})
    })
    
}

function getPosts(user) {
            return  new Promise((resolve, reject) => {
        resolve({ ...user,  posts: [
    "Node.js Post",
    "Express Post"
  ],})
    })
}
loginUser("ketan")
   .then(getProfile)
   .then(getPosts)
   .then(console.log)
   .catch(console.log);