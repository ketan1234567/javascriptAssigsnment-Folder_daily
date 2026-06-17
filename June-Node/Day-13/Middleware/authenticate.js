const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token Required",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const result = jwt.verify(token, "myketan");

    console.log(result);

    if (result.user.role === "admin") {
      return next();
    }

    return res.status(403).json({
      message: "Access Denied",
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
}

module.exports = authenticate;