import { useHistory } from "react-router-dom";
import { FaUserAlt, FaRegPlayCircle } from "react-icons/fa";

import StarfieldAnimation from "react-starfield-animation";

import "./style.css";

const Description = () => {
  const history = useHistory();
  //get user name from textfield
  const userNameFunc = (e) => {
    if (e.target.userName.value) {
      history.push(`/Level/${e.target.userName.value}`);
    } else {
      // if there is no user name enter show Guest
      history.push(`/Level/Guest`);
    }
  };
  return (
    <div className="desc">
      <StarfieldAnimation
        style={{
          //animation stars
          position: "absolute",
          width: "100%",
          height: "100%",
          zindex: -1,
        }}
      />
      <div className="boxInfo">
        <div>
          <FaUserAlt className="avatar" />
          <h3>HOW TO PLAY:</h3>
          <p id="disc">
            Find a match and get rid of all the cards to win! This fast
            flippin', picture pickin' card game is all about speed. flip through
            the cards to connect images, find matches and get rid of all the
            cards. Once one match is found, another is immediately called out
            and the search is on again, so think and play fast,before the time
            is out to win.
          </p>
        </div>
        <div className="gap"></div>
        <div className="gap"></div>
        <form onSubmit={userNameFunc}>
          <h2>Let's Play!</h2>
          <input
            id="textField"
            type="text"
            name="userName"
            placeholder="Enter Your name..."
          />{" "}
          <button className="start-bttn">
            <FaRegPlayCircle />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Description;
