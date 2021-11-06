import React from "react";
import { Route, Switch } from "react-router-dom";
import Level from "./components/Level";
import Result from "./components/Result";
import Description from "./components/Description";
import Game from "./components/Game";
import "./style.css";
import Video from "./components/Video";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Video} />
        <Route exact path="/Description" component={Description} />
        <Route exact path="/Level/:userName" component={Level} />
        <Route exact path="/Game/:userName/:timer" component={Game} />
        <Route exact path="/Result/:userName/:result" component={Result} />
      </Switch>
    </>
  );
};

export default App;
