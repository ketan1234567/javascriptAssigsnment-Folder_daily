

const users = [
    { id: 1, name: "Ketan" },
    { id: 2, name: "Akshay" }
];

const posts = [
    { id: 1, userId: 1, title: "Node.js" },
    { id: 2, userId: 1, title: "Express" }
];




function getuser(id) {
    return new Promise((resolve, reject) => {
        const user = users.find(item => item.id === id)
        if (!user) {
            reject(new Error("User_id not Found"))

        }

        resolve({ ...user })
    })
}

function getPosts(user) {

    return new Promise((resolve, reject) => {
        const post = posts
            .filter(item => item.userId == user.id)

        const final_output = post.map((result) => {
            //console.log(result);

            return result.title
        })



        resolve(final_output)




    })




}

getuser(1).then((value) => {
    console.log(`User:${value.name} `);

    return getPosts(value)

}).then((value) => {

    console.log(`Post: 
${value[0]}
${value[1]}`);





}).catch((error) => {
    console.log(error);

})