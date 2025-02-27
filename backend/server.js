const cors = require("cors");
const morgan = require("morgan");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const { connnectToMongoDb } = require("./config/database");
const { startServer } = require("./utils/functions");
const { server, app, express } = require("./socket");
const { userRouter, authRouter, messageRouter } = require("./routes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);

server.listen(process.env.PORT, async () => {
  startServer();
  await connnectToMongoDb();
});

app.use(errorMiddleware);
