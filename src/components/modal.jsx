import React from "react";

const modal = (props) => {
  const description = () => {
    if (props.modal === "delete") {
      return "Do you really want to delete?";
    } else if (props.modal === "doing") {
      return "Starting to work on it?";
    } else if (props.modal === "review") {
      return "Task is reviewed?";
    } else if (props.modal === "done") {
      return "Task is completed?";
    }
    return "bg-green-300";
  };
  return (
    <>
      {/* <div
        className="w-full h-full b opacity-50 absolute top-0 left-0"
        onClick={() => props.setModal("")}
      ></div> */}
      <div className="w-full flex fixed left-0 justify-center z-20 top-5">
        <div className="bg-white p-3 fixed border-2 rounded-md m-auto">
          <div className="text-xl">{props.modal.toUpperCase()} TASK</div>
          <p className="w-full">{description()}</p>
          <div className="w-full">
            <button
              onClick={() => props.setModal("")}
              className="bg-blue-500 hover:bg-blue-600 text-white m-1 p-1 rounded float-right"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                props.setModalResponse(true);
              }}
              className="bg-red-500 hover:bg-red-600 text-white m-1 p-1 rounded float-right"
            >
              {props.modal}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
