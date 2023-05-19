const connect = require("./helper/db");
connect();
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

const taskRouter = require("./route/taskRoute");

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/", taskRouter);
app.get("/", () => {
  console.log("Todo list backend");
});
app.get("/test", () => {
  console.log("This is test endpoint");
});
app.listen(port, () => {
  console.log(`server is running at localhost:${port} =====> 3000`);
});
