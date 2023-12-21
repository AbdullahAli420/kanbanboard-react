import NavigationMenu from "./components/navigationMenu";
import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Panel from "./components/panel";
import axios from "axios";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("all");
  const [addForm, setAddForm] = useState(false);
  const [TodoData, setTodoData] = useState([]);
  const [EditForm, setEditForm] = useState(false);
  const [EditTodo, setEditTodo] = useState();

  useEffect(() => {
    const bodyWidth = parseInt(window.getComputedStyle(document.body).width);
    // console.log(bodyWidth);
    if (bodyWidth <= 768) {
      setSelectedNavItem("doing");
    } else {
      setSelectedNavItem("all");
    }

    fetchTodo();
  }, [setSelectedNavItem]);

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  const fetchTodo = async () => {
    const todo = await axios.get("http://localhost:3000/todos");
    setTodoData(todo.data);
  };

  return (
    <div>
      {addForm && (
        <TaskForm title="add" fetchTodo={fetchTodo} setForm={setAddForm} />
      )}

      {EditForm && (
        <TaskForm
          title="edit"
          fetchTodo={fetchTodo}
          setForm={setEditForm}
          task={EditTodo}
        />
      )}
      <div className="w-full p-2">
        <h1 className="text-3xl inline">Quick KanBan</h1>
        <button
          onClick={() => setAddForm(!addForm)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded float-right"
        >
          Add Task
        </button>
      </div>
      <NavigationMenu
        selectedNavItem={selectedNavItem}
        handleNavItemClick={handleNavItemClick}
      />
      <div className="flex justify-center">
        {(selectedNavItem === "todo" || selectedNavItem === "all") && (
          <Panel
            panel="todo"
            data={TodoData.filter(
              (task) => !task.doing && !task.done && !task.reviewed
            )}
            fetchTodo={fetchTodo}
            setEditForm={setEditForm}
            setEditTodo={setEditTodo}
          />
        )}
        {(selectedNavItem === "doing" || selectedNavItem === "all") && (
          <Panel
            panel="doing"
            data={TodoData.filter((task) => task.doing)}
            fetchTodo={fetchTodo}
            setEditForm={setEditForm}
            setEditTodo={setEditTodo}
          />
        )}
        {(selectedNavItem === "review" || selectedNavItem === "all") && (
          <Panel
            panel="review"
            data={TodoData.filter((task) => task.reviewed)}
            fetchTodo={fetchTodo}
            setEditForm={setEditForm}
            setEditTodo={setEditTodo}
          />
        )}
        {(selectedNavItem === "done" || selectedNavItem === "all") && (
          <Panel
            panel="done"
            data={TodoData.filter((task) => task.done)}
            fetchTodo={fetchTodo}
            setEditForm={setEditForm}
            setEditTodo={setEditTodo}
          />
        )}
      </div>
      <div></div>
    </div>
  );
}

export default App;
