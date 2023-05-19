const express = require("express");
const router = express.Router();

const {
  getTasks,
  getIsDoneTasks,
  postTask,
  deleteTask,
  updateTask,
  updateIsDoneTask,
} = require("../controller/TaskController");
router
  .get("/list", getTasks)
  .get("/count", getIsDoneTasks)
  .post("/add", postTask)
  .delete("/delete", deleteTask)
  .patch("/update/:id", updateTask)
  .patch("/checked/:id", updateIsDoneTask);
module.exports = router;
