const { model, Schema } = require("mongoose");
const TaskSchema = new Schema({
  text: String,
  isDone: {
    type: Boolean,
    default: false,
  },
  createdDate: Date,
});
const TaskModel = model("Task", TaskSchema);
module.exports = TaskModel;
