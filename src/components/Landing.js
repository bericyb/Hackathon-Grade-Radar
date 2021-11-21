import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Landing = ({ brand, onClick }) => {
  const openBYU = () => {
    window.open("https://byu.instructure.com/courses/11349", "_blank");
  };

  return (
    <div>
      {console.log("Hello!")}
      <Button className="m-5" onClick={openBYU}>
        <Link to="/home" style={{ color: "white" }}>
          Login to BYU
        </Link>
      </Button>
    </div>
  );
};

export default Landing;
