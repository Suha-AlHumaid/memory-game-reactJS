import React from "react";

import { useParams } from "react-router";
import "./style.css";
const Result = () => {
  const userName = useParams().userName;
  const result = useParams().result;
  return (
    <div className="result">
      <div className="resultBox">
        <div className="score">
        <div className="up">
          
          <h3>{userName}</h3>
          <h2>Score</h2>
          <h2>{result}</h2>
        </div>

        <div className="down">
          <button id="restartBtn">Play Again?</button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
