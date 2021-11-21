import React from "react";
import { Card } from "react-bootstrap";

const About = ({ brand }) => {
  return (
    <Card style={{backgroundColor: "#3d4148", minHeight:"80vh"}}>
      <Card.Body>
        <div className="align-items-center justify-content-center">
          <h1 className="text-center">{brand}</h1>
          <p className="text-center">
            Radar is the number one tool for aggregating student resources and organizing them by priority. No more clicking through tabs and scrolling through assignment lists to get to where you need to go. Sign up for free using your university account right now!
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

About.defaultProps = {
  brand: "Brand",
};

export default About;
