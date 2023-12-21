import React from "react";
import Card from "./Card";
import axios from "axios";

const Panel = (props) => {
  const done = (id) => {
    console.log("als");
    axios
      .post("http://localhost:3000/done", { task: props.panel, id })
      .then((res) => {
        if (res.data) {
          props.fetchTodo();
        }
      });
  };

  const backgroundColor = () => {
    if (props.panel === "todo") {
      return "bg-red-600";
    } else if (props.panel === "doing") {
      return "bg-blue-600";
    } else if (props.panel === "review") {
      return "bg-purple-600";
    } else if (props.panel === "done") {
      return "bg-green-600";
    }
    return "bg-green-600";
  };
  const cards = props.data.map((task, index) => (
    <Card
      key={index}
      card={props.panel}
      task={task}
      done={done}
      fetchTodo={props.fetchTodo}
      setEditForm={props.setEditForm}
      setEditTodo={props.setEditTodo}
    />
  ));
  return (
    <div className="md:w-60 w-full m-4 ">
      <div className={`rounded-md p-4 text-center ${backgroundColor()}`}>
        <h2 className="text-2xl text-white font-bold">
          {props.panel.toUpperCase()}
        </h2>
      </div>
      <div>{cards}</div>
    </div>
  );
};

export default Panel;
