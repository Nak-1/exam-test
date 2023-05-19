const TaskModel = require("../helper/TaskModel");

exports.getTasks = async (request, response) => {
  try {
    const list = await TaskModel.find();
    return response.status(200).json({
      message: true,
      data: list,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.getIsDoneTasks = async (request, response) => {
  try {
    const count = await TaskModel.find({ isDone: false }).count();
    return response.status(200).json({
      message: true,
      data: count,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.postTask = async (request, response) => {
  try {
    const { isDone, text } = request.body;
    const newTask = await TaskModel.create({
      text: text,
      isDone: isDone,
    });
    return response.status(200).json({
      message: "new task",
      data: newTask,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.deleteTask = async (request, response) => {
  const id = request.headers.id;
  try {
    const deletedTask = await TaskModel.findByIdAndRemove(id);
    return response.status(200).json({
      message: `task with ${request.params.id} id is deleted`,
      "Removed task : ": deletedTask,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.updateTask = async (request, response) => {
  const { id } = request.params;
  try {
    const { text } = request.body;
    const updatedTask = await TaskModel.findByIdAndUpdate(id, {
      text: text,
    });
    response.status(200).json({
      message: `task with ${request.params.id} id is updated`,
      data: updatedTask,
    });
  } catch (error) {
    return response.status(400), json({ message: error, data: null });
  }
};

exports.updateIsDoneTask = async (request, response) => {
  const { id } = request.params;
  try {
    const { isDone } = request.body;
    const updatedTask = await TaskModel.findByIdAndUpdate(id, {
      isDone: isDone,
    });
    response.status(200).json({
      message: `task with ${request.params.id} isdone is updated`,
      data: updatedTask,
    });
  } catch (error) {
    return response.status(400), json({ message: error, data: null });
  }
};
