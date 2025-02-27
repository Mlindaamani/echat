const express = require("express");
const authRouter = express.Router();
const {
  register,
  refreshToken,
  login,
} = require("../controllers/authController");

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/refresh-token", refreshToken);

module.exports = { authRouter };
