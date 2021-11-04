import React from "react";
import { useState } from "react";

import "./style.css";

const User = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="grand">
      <div className="userBox">
        <h1>Enter Your name</h1>
        <form>
          <input
            id="textField"
            type="text"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="submitBtn">
            <button className="enterBtn">Enter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
