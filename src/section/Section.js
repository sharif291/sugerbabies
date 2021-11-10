import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import Home from "../pages/Home";
import Landing from "../pages/LandingPage";
import Profile from "../pages/Profile";

export default function Section() {
  return (
    <Switch>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/myprofile" exact component={Profile}></Route>
      <Route path="/" exact component={Landing}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
}
