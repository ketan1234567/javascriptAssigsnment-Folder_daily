const express = require('express')
const app = express()



app.listen(3000, () => {
    console.log("start_Running_Server");

})

const users = [
    { id: 1, name: "Ketan" },
    { id: 2, name: "Rahul" }
];

app.get("/users/:id", (req, res) => {

    try {

        const id = parseInt(req.params.id)


        const user = users.find((item) => {
            return item.id === id;
        });

        if (!user) {
            return res.status(404).json({
                "message": "User not found"
            })
        }

        return res.status(200).json(user)






    } catch (error) {

    }



})