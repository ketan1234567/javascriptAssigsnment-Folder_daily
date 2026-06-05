




async function getUsers() {
  const user1 = await fetchUser(1);
  const user2 = await fetchUser(2);
  const user3 = await fetchUser(3);

  const result= await Promise.all([
    user1(),
    user2(),
    user3()
  ])

  return [user1, user2, user3]=result

  console.log(user1);
  

}


getUsers()