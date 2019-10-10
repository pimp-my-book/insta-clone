import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Register from "./containers/Register";
import CreatePost from "./containers/CreatePost";
import Login from "./containers/Login";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={ Home } props={ childProps } />
        <Route path="/Register" exact component={ Register } props={ childProps } />
        <Route path="/CreatePost" exact component={ CreatePost } props={ childProps } />
        <Route path="/Login" exact component={ Login } props={ childProps } />
    </Switch>