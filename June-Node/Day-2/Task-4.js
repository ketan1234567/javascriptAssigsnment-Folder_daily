const express = require('express')
const app = express()


app.listen(3000, () => {
    console.log("Start_Server");
})


app.get("/", (req, res) => {
    res.send("Home_Pages")
})

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    if (id==1) {
        res.status(200).json(
            { "id": 1, "name": "Ketan" }
        )
    }else if (isNaN(id)) {
        res.status(400).json(
            {
  "message": "Invalid user id"
}
        )
    } else {
                res.status(404).json(
            { Message:"User id Not Foud"}
        )
    }
})