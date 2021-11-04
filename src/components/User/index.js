import React from "react";

import { useHistory } from "react-router-dom";
import "./style.css";

const User = () => {


  const history = useHistory();
  const userNameF = (e) => {
    history.push(`/Description/${e.target.userName.value}`);

  };

  return (
    <div className="grand">
      <div className="userBox">
        <h1>Enter Your name</h1>
        <form 
        onSubmit={userNameF}
        >
          <input
            id="textField"
            type="text"
            name="userName"
           
          />
         
            <button
              className="enterBtn"
              
            >
              Enter
            </button>
          
        </form>
      </div>
    </div>
  );
};

export default User;