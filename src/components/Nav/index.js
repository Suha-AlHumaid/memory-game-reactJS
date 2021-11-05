import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/User">User</Link>
        </li>
        <li>
          <Link to="/Description/:userName">Description</Link>
        </li>
        <li>
          <Link to="/Game/:userName">Game</Link>
        </li>
        <li>
          <Link to="/Result/:userName/:result">Result</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
