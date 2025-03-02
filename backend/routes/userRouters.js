const {
  getSidebarUsers,
  getProfile,
  uploadProfile,
} = require("../controllers/userController");

const { upload } = require("../middleware/fileuploadMiddleware");

const {
  userIsAuthenticatedMiddleware,
} = require("../middleware/authMiddleware");

const express = require("express");
const userRouter = express.Router();

userRouter.post(
  "/profile/upload",
  userIsAuthenticatedMiddleware,
  upload.single("photo"),
  uploadProfile
);
userRouter.get("/profile/me", userIsAuthenticatedMiddleware, getProfile);
userRouter.get("/chat-users", userIsAuthenticatedMiddleware, getSidebarUsers);


module.exports = { userRouter };
