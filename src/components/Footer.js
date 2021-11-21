import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ team }) => {
  return (
    <footer className="footer" style={{backgroundColor: "#282c34"}}>
      <p>Made with love by {team}</p>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

Footer.defaultProps = {
  team: "...",
};

export default Footer;
