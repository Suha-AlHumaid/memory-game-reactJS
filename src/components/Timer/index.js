import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Timer = (props) => {
const result = props.result;
  let [timeSeconds, setTimeSeconds] = useState("60");

    const history = useHistory();
  const userName = useParams().userName;
  const playAgain =()=> { //for restart
    history.push(`/Game/${userName}`);
  }
  useEffect(() =>{
    const interval = setInterval(() => {
   
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);



  function updateTime() {
    // check is it print every sec
    if (timeSeconds >= 0) {
      setTimeSeconds(timeSeconds--);
      // console.log(timeSeconds);
    } else {
      // history.push(`/Result/${userName}/${result}`);
     props.toResult()
    }
  }
  useEffect(() => updateTime, [10]);

  return (
    <div className="timer">
      <span>{timeSeconds}</span>

    </div>
  );
};

export default Timer;
