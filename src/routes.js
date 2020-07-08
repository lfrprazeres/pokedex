import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile } from "./Screens";

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:id" component={Profile} />
      </Switch>
    </Router>
  );
}
