
import { FaUserAlt, FaRegPlayCircle } from "react-icons/fa";
import {useParams} from "react-router-dom"

import "./style.css";

const Description = () => {


const userName = useParams().userName;


  return (
    <div className="desc">
      <FaUserAlt className="avatar"/>
      <h1>Welcome {userName}</h1>
      <h2>HOW TO PLAY:</h2>
      <p>
       find a match
        and get rid of all the cards to win! This fast flippin', picture
        pickin' card game is all about speed. flip through the cards
        to connect images, find matches and get rid of all the cards. Once one
        match is found, another is immediately called out and the search is on
        again, so think and play fast,before the time is out to win.
      </p>
      <button className="bttn"><FaRegPlayCircle/></button>
    </div>
  );
};

export default Description;