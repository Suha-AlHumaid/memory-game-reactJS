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
          <Link to="/Description">Description</Link>
        </li>
        <li>
          <Link to="/Result">Result</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
