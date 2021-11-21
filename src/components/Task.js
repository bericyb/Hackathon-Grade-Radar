import React, { useState } from "react";
import '../index.css'
import { Button } from "react-bootstrap";

const Task = ({ task }) => {
  const [showPercent, setShowPercent] = useState(false);
  // const [r, setR] = useState(255-(100-task.weight));
  // const [g, setG] = useState(100-task.weight*50.4);
  // const [b, setB] = useState(100-task.weight*50.4);
  return (
    <div
      style={ task.weight>20 ? { color: "white", backgroundColor: "#7c2a2c", borderRaidus: "25px" } : task.weight > 10 ? { color: "white", backgroundColor: "#f6373a", borderRaidus: "25px" } : task.weight > 5 ? { color: "white", backgroundColor: "#fd523b", borderRaidus: "25px" } : task.weight > 2 ? { color: "white", backgroundColor: "#ff8e3c", borderRaidus: "25px" } : task.weight >= 0 ? { color: "white", backgroundColor: "#ffdf39", borderRaidus: "25px" } : {}}
      className="task"
      onClick={() => setShowPercent(!showPercent)}
    >
      <h4
        className="title"
      >
        {task.title}
      </h4>
      <p>{task.date}</p>
      {showPercent && (
        <div className="dropDown"
          onClick={() => {
            window.open(task.link);
          }}
        >
            <p style={{ fontSize: "large" }}>{task.weight} for {task.class}</p>
            <Button>Go To Assignment</Button>
        </div>
      )}
    </div>
  );
};

export default Task;
