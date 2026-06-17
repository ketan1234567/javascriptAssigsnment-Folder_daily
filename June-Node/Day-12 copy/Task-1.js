async function getUserPosts(userId){
    try {
        const user= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
         
          if (!user.ok) {
   throw new Error("User id not found");
   
          }
     
          const users= await user.json()
        
          const main_id=users.id
        
          const posts_id= await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${main_id}`)

     const post= await posts_id.json()



return {
    userName:users.username,
    totalPosts:post.length

}
        
    } catch (error) {
        console.log(error);
        
    }
}
getUserPosts(10).then(
(value)=>console.log(value)
).catch((error)=>(error))