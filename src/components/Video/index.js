import React from "react";
import YouTube from "react-youtube";
// import VideoPlayer from "react-video-js-player";
// import StoryBots from './StoryBots.mp4';
// https://www.youtube.com/watch?v=ZHAqT4hXnMw
// https://youtu.be/ZHAqT4hXnMw
import "./style.css";

const Video = () => {
  function videoPlay(e) {
    e.target.playVideo();
  }
  const opts = {
    height: "650px",
    width: "500px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const closeVid =()=>{
    window.open("/Description", "_self");
}
  // const videoSrc = StoryBots;
  return (
    <div className="video">
      <button className="closeBtn" onClick={closeVid}>x</button>
      <div>
        <YouTube videoId="ZHAqT4hXnMw" opts={opts} onPlay={videoPlay} />
      </div>
    </div>
  );
};

export default Video;
