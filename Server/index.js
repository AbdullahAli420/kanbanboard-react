const express = require("express");
const app = express();
const port = 3000;
const { todoValidator } = require("./middleware/TodoValidator");
const todoController = require("./controllers/todoCRUD");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/todos", todoController.getTodos);
app.put("/addtodo", todoController.createTodos);
app.delete("/deletetodo", todoController.deleteTodos);
app.get("/restoreTodos", todoController.restoreTodos);
app.post("/done", todoController.done);
app.put("/edittodo", todoController.edit);
// app.put("/updatetodo",)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
