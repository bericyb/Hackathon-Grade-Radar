import React from "react";
import TaskMini from "./TaskMini";
import { Card } from "react-bootstrap";

const Day = ({ text, tasks }) => {
  return (
    <Card style={{backgroundColor: "#3d4148"}}>
      <Card.Body>
        <p>{text}</p>
        <hr></hr>
        {tasks.map((task) => (
          <TaskMini key={task.id} task={task} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Day;
