import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import User from "./components/User";
import Result from "./components/Result";
import Description from "./components/Description";
import "./style.css";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/User" component={User} />
        <Route exact path="/Result" component={Result} />
        <Route exact path="/Description" component={Description} />
      </Switch>

    </>
  );
};

export default App;
