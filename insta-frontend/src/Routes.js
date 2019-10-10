import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={ Home } props={ childProps } />
    </Switch>