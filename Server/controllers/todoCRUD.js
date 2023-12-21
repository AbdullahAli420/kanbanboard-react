const { Todos } = require("../models");

module.exports.getTodos = async (req, res) => {
  const todos = await Todos.findAll();
  res.send(todos);
};

module.exports.createTodos = async (req, res) => {
  await Todos.create(req.body);
  res.send(true);
};

module.exports.deleteTodos = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  try {
    Todos.destroy({ where: { id: id } });
    res.send(true);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports.restoreTodos = async (req, res) => {
  await Todos.restore();
  res.send("done");
};

module.exports.done = async (req, res) => {
  const task = await Todos.findByPk(req.body.id);
  if (req.body.task === "todo") {
    task.doing = true;
  } else if (req.body.task === "doing") {
    task.doing = false;
    task.reviewed = true;
  } else if (req.body.task === "review") {
    task.reviewed = false;
    task.done = true;
  }
  await task.save();
  res.send(true);
};

module.exports.edit = async (req, res) => {
  const todo = await Todos.findByPk(req.body.id);
  await todo.update(req.body);
  await todo.save();
  res.send(true);
};
