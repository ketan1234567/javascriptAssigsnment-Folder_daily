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
  const id = req.params.id;

  const user = users.find((item) => {
    item.id === id;
  });

  if (!user) {
    return res.json("User Found");
  }

  res.json(user);
});