require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/user-management-api").then(() => {
    console.log("Database connection succesful")
}).catch((err) => {
    console.log("Database connection failed", err);
})

require("./users");