const express = require('express');
const { signup, signin, contactNumber, userAdd, NumberLogin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup",signup)
userRouter.post("/login",NumberLogin)
userRouter.post("/contact",contactNumber)
userRouter.post("/address",userAdd)


module.exports = userRouter;