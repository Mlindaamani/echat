const { authRouter } = require("./authRoutes");
const { messageRouter } = require("./messageRoutes");
const { userRouter } = require("./userRouters");

module.exports = {
  authRouter,
  messageRouter,
  userRouter,
};
