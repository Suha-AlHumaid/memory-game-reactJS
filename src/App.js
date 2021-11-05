import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import User from "./components/User";
import Result from "./components/Result";
import Description from "./components/Description";
import Game from "./components/Game";
import "./style.css";

const App = () => {
  return (
    <>
  <Nav/>
      <Switch>
      
        <Route exact path="/User" component={User} />
        <Route exact path="/Description/:userName" component={Description} />
        <Route exact path="/Game/:userName" component={Game} />
        <Route exact path="/Result/:userName/:result" component={Result} />
      </Switch>

    </>
  );
};

export default App;