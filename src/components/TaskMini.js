import React, { useState } from "react";
import '../index.css'
import { ButtonGroupProps } from "react-bootstrap";

const TaskMini = ({ task }) => {
  const [showPercent, setShowPercent] = useState(false);

  return (
    <div
      style={ task.weight>20 ? { color: "white", backgroundColor: "#7c2a2c", borderRaidus: "25px" } : task.weight > 10 ? { color: "white", backgroundColor: "#f6373a", borderRaidus: "25px" } : task.weight > 5 ? { color: "white", backgroundColor: "#fd523b", borderRaidus: "25px" } : task.weight > 2 ? { color: "white", backgroundColor: "#ff8e3c", borderRaidus: "25px" } : task.weight >= 0 ? { color: "white", backgroundColor: "#ffdf39", borderRaidus: "25px" } : {}}
      className="task"
      onClick={() => setShowPercent(!showPercent)}
    >
      <h4
        className="title"
        // style={task.done ? { textDecoration: "line-through", backgroundColor: "grey", borderRaidus: "25px" } : {backgroundColor: "grey", borderRaidus: "25px"}}
      >
        {task.class}
      </h4>
      <p>{task.date}</p>
      {showPercent && (
        <div className="dropDown"
          onClick={() => {
            window.open(task.link);
          }}
        >
            <p>{task.title}</p>
            <p>{task.weight}</p>
            {/* <Button>Go To Assignment</Button> */}
        </div>
      )}
    </div>
  );
};

export default TaskMini;
