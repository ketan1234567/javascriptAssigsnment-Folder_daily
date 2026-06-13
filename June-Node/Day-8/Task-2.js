          const users = [
    { id: 1, name: "Ketan" },
    { id: 2, name: "Rahul" }
  ];


  function getUserPromise(id){
    return new Promise((resolve, reject) => {
          const user=users.find(item=>item.id===id)
        if (!user) {
           reject(new Error("User Not Found"))
        } else {
            resolve(user)
           
        }
    })
  }

  getUserPromise(1).then((value)=>{
    console.log(value);
  }).catch((error)=>{
    console.log(error);
  })