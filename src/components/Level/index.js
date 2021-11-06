import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import StarfieldAnimation from "react-starfield-animation";
const Level = () => {
  const userName = useParams().userName;
  const history = useHistory();
  const hardLevel = (e) => {
    history.push(`/Game/${userName}/60`);
  };
  const mediumLevel = (e) => {
    history.push(`/Game/${userName}/90`);
  };
  const easyLevel = (e) => {
    history.push(`/Game/${userName}/120`);
  };

  return (
    <div className="levels">
      <StarfieldAnimation
        style={{
          //animation stars
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="levelsbox">
        <div>
          <h2>{userName}</h2>
          <h1>Select Level </h1>
        </div>
        <div className="selectBtns">
          <button id="hard" className="level-bttn" onClick={hardLevel}>
            Hard
          </button>
          <button id="medium" className="level-bttn" onClick={mediumLevel}>
            Medium
          </button>
          <button id="easy" className="level-bttn" onClick={easyLevel}>
            Easy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Level;
