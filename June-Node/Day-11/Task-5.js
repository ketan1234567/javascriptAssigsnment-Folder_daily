async function fetchUser(id){

 const response = await fetch(
   `https://jsonplaceholder.typicode.com/users/${id}`
 );

 if(!response.ok){
    throw new Error("API Failed");
 }

 const data = await response.json();

 return data.name;

}

fetchUser(1)
.then(console.log)
.catch(console.error);