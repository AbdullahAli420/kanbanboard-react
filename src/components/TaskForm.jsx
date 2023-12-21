import { useEffect, useState } from "react";
import axios from "axios";

const TaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [taskDescription, setTaskDescription] = useState("");
  const [taskTime, setTaskTime] = useState("");

  useEffect(() => {
    console.log(props.title);
    if (props.title === "edit") {
      setTaskName(props.task.name);
      setSelectedDate(props.task.date.split("T")[0]);
      setTaskDescription(props.task.description);
      setTaskTime(props.task.time);
    }
  });
  // [
  //   setTaskName,
  //   setSelectedDate,
  //   setTaskDescription,
  //   setTaskTime,
  //   props.task.name,
  //   props.task.date,
  //   props.task.description,
  //   props.task.time,
  //   props.title,
  // ]
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      name: taskName,
      time: taskTime,
      date: selectedDate,
      description: taskDescription,
    };

    if (props.title === "edit") {
      todo.id = props.task.id;
    }

    axios
      .put(
        `http://localhost:3000/${
          props.title === "add" ? "addtodo" : "edittodo"
        }`,
        todo
      )
      .then((response) => {
        props.fetchTodo();
        props.setForm(false);
      });
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-gray-400 opacity-50 absolute top-0 left-0"
        onClick={() => props.setForm(false)}
      ></div>
      <div className="flex w-full justify-center items-center modal">
        <div className="bg-white absolute top-4 p-3 rounded-md w-80 m-3 border-black">
          <div className="flex justify-between">
            <h2 className="text-3xl">
              {props.title === "add" ? "Add Task" : "Edit Task"}
            </h2>
            <button onClick={() => props.setForm(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div>
            <p>Fill this form to {props.title} a task:</p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex items-center flex-col"
            >
              <input
                type="text"
                className="w-full flex-1 border-2 border-solid border-black p-1"
                placeholder="Write task name..."
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <input
                type="date"
                value={selectedDate}
                min={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border-2 border-solid border-black p-1 m-1"
              />
              <input
                type="time"
                className="w-full border-2 border-solid border-black p-1 m-1"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              />
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                name="taskDescription"
                id="taskDescription"
                cols="30"
                rows="5"
                className="w-full border-2 border-solid border-black p-1 m-1"
                placeholder="Write task description..."
              ></textarea>
              <div className="w-full">
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded float-right">
                  {props.title.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
