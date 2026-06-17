const express = require("express");
const jwt = require("jsonwebtoken");
const authenticate = require("./Middleware/authenticate");

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "anil",
    role: "admin",
  },
];

// Protected Route
app.get("/admin", authenticate, (req, res) => {
  res.status(200).json(users);
});

// Create Token
app.post("/check_login", (req, res) => {
  try {
    const { name, role } = req.body;

    if (!name || !role) {
      return res.status(400).json({
        message: "Name and Role are required",
      });
    }

    const user = {
      id: users.length + 1,
      name,
      role,
    };

    users.push(user);

    const token = jwt.sign(
      {
        user,
      },
      "myketan",
      {
        expiresIn: "3h",
      }
    );

    return res.status(200).json({
      message: "Token Generated",
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server Started");
});