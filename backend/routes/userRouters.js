const {
  getSidebarUsers,
  getProfile,
  uploadProfile,
} = require("../controllers/userController");

const {
  userIsAuthenticatedMiddleware,
} = require("../middleware/authMiddleware");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/profile/me", userIsAuthenticatedMiddleware, getProfile);
userRouter.get("/chat-users", userIsAuthenticatedMiddleware, getSidebarUsers);

userRouter.post(
  "/profile/upload",
  userIsAuthenticatedMiddleware,
  uploadProfile
);

module.exports = { userRouter };
