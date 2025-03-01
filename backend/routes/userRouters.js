const {
  getSidebarUsers,
  getProfile,
} = require("../controllers/userController");

const {
  userIsAuthenticatedMiddleware,
} = require("../middleware/authMiddleware");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/chat-users", userIsAuthenticatedMiddleware, getSidebarUsers);

userRouter.get("/profile/me", userIsAuthenticatedMiddleware, getProfile);

module.exports = { userRouter };
