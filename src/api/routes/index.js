const express = require("express");
const router = express.Router();
const createUserController = require("../controllers/users");
const { signup, login } = createUserController;
const userAuth = require("../middleware/auth");
const {authToken} = require("../middleware/auth_token");
const getuser = require("../controllers/find_users");

router.post("/signup", userAuth.validateUser, signup);
router.post("/login", login);
router.get("/getuser", authToken, getuser.getuser);
router.get("/getuser/:id", authToken, getuser.finduser);
router.get("/deleteuser/:id", authToken, getuser.deleteuser);

module.exports = router;