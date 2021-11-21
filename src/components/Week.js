import React, { useEffect, useState } from "react";
import Day from "./Day";
import "./Week.css";
import { Container } from "react-bootstrap";

const Week = ({ tasks }) => {

  return (
    <div>
      <Container style={{backgroundColor: "#282c34"}} className="weekRow">
        <Day text={"Sun"} tasks={tasks.sun} />
        <Day text={"Mon"} tasks={tasks.mon} />
        <Day text={"Tues"} tasks={tasks.tue} />
        <Day text={"Wed"} tasks={tasks.wed} />
        <Day text={"Thurs"} tasks={tasks.thurs} />
        <Day text={"Fri"} tasks={tasks.fri} />
        <Day text={"Sat"} tasks={tasks.sat} />
      </Container>
    </div>
  );
};

export default Week;
