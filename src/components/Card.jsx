import React, { useState } from "react";
import axios from "axios";
import Modal from "./modal";
import { useEffect } from "react";

const Card = (props) => {
  const [modal, setModal] = useState("");
  const [modalResponse, setModalResponse] = useState(false);

  useEffect(() => {
    if (modalResponse && modal === "delete") {
      deleteTodo();
    }
  });

  const iconsColor = () => {
    if (props.card === "todo") {
      return "text-red-600";
    } else if (props.card === "doing") {
      return "text-blue-600";
    } else if (props.card === "review") {
      return "text-purple-600";
    } else if (props.card === "done") {
      return "text-green-600";
    }
    return "bg-green-300";
  };
  const date = () => {
    const date = new Date(props.task.date).toISOString().split("T")[0];
    const today = new Date().toISOString().split("T")[0];
    if (today === date) {
      return "today";
    }
    return date;
  };
  const backgroundColor = () => {
    if (props.card === "todo") {
      return "bg-red-300";
    } else if (props.card === "doing") {
      return "bg-blue-300";
    } else if (props.card === "review") {
      return "bg-purple-300";
    } else if (props.card === "done") {
      return "bg-green-300";
    }
    return "bg-green-300";
  };
  // console.log(props.card, backgroundColor(), props.task);

  const deleteTodo = () => {
    setModalResponse(false);
    axios
      .delete("http://localhost:3000/deletetodo", {
        params: {
          id: props.task.id,
        },
      })
      .then((response) => {
        if (response.data) {
          props.fetchTodo();
          setModal("");
        }
      });
  };

  return (
    <>
      {modal !== "" && (
        <Modal
          modal={modal}
          setModal={setModal}
          setModalResponse={setModalResponse}
        />
      )}
      <div className={`p-2 m-2 rounded-md ${backgroundColor()}`}>
        <h3 className="text-xl">{props.task.name}</h3>
        {props.task.time !== "00:00:00" ? (
          <div>
            {date() !== "today" ? `On ${date()}` : "Today"} at {props.task.time}
          </div>
        ) : (
          ""
        )}
        <div>{props.task.description}</div>
        <div className="flex justify-end">
          {props.card !== "done" && (
            <button
              className={`hover:text-white border border-transparent ${iconsColor()}`}
              onClick={() => props.done(props.task.id)}
            >
              <span className="material-symbols-outlined">check</span>
            </button>
          )}
          <button
            className={`hover:text-white border border-transparent ${iconsColor()}`}
            onClick={() => setModal("delete")}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
          {props.card !== "done" && (
            <button
              className={`hover:text-white border border-transparent ${iconsColor()}`}
              onClick={() => {
                props.setEditForm(true);
                props.setEditTodo(props.task);
              }}
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
