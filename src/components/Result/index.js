import React from "react";
import ReactHowler from 'react-howler'
import music from  "./music4.ogg";
import { useParams,useHistory} from "react-router";
import "./style.css";
const Result = () => {
  const {userName,result} = useParams();
  // const userName =useParams.userName;
  // const result = useParams().result;
const params =useParams();
console.log(params);
  const history = useHistory();
  function playAgain() {
    history.push(`/Game/${userName}`);
  }
  return (
    <div className="result">
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
