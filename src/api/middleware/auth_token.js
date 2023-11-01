const jwt = require("jsonwebtoken");

const authToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const splitValue = authHeader.split(" ");
    if (splitValue.length !== 2 || splitValue[0] !== "Bearer") {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const token = splitValue[1];
    const decodedToken = jwt.verify(token, process.env.secretKey);

    if (!decodedToken) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user_id = decodedToken.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};
module.exports = { authToken };
