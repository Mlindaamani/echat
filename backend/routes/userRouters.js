const { getSidebarUsers } = require("../controllers/userController");

const {
  userIsAuthenticatedMiddleware,
} = require("../middleware/authMiddleware");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/chat-users", userIsAuthenticatedMiddleware, getSidebarUsers);

module.exports = { userRouter };
