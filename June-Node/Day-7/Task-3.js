const users = [
    { id: 1, name: "Ketan" },
    { id: 2, name: "Rahul" }
];

async function fetchUser(id) {
    try {


        return new Promise((resolve, reject) => {
            const user = users.find(item => item.id === id)


            setTimeout(() => {
                if (!user) {
                    reject(new Error("user not foud"))
                } else {
                    resolve(user)
                }
            }, 2000);
        })


    } catch (error) {
        console.log(error);


    }
}

fetchUser(10).then((value)=>{
    console.log(value);
    
}).catch((error)=>{
    console.log(error);
    
})