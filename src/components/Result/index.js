import React from "react";
import ReactHowler from "react-howler";
import music from "./music4.ogg";
import { useParams, useHistory } from "react-router";
import "./style.css";
import StarfieldAnimation from 'react-starfield-animation'
const Result = () => {
  const { userName, result } = useParams();

  const history = useHistory();
  function playAgain() {
    history.push(`/level/${userName}`);
  }


  return (
    <div className="result">
            <StarfieldAnimation       style={{ //animation stars
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />

      <ReactHowler
        // src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        src={music}
        playing={true}
        preload={true}
        loop={true}
      />
      <div className="resultBox">
        <div className="scoreBox">
          <div className="up">
            <h1>{userName}</h1>
            <p>Score</p>
            <span id="score">{result}</span>
           <span className="word"> {(result===9)? "WINNER" :"LOSER"}</span>
          </div>

          <div className="down">
            <button id="restartBtn" onClick={playAgain}>
              play again?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
