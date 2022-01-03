import React from "react";
import { Redirect } from "react-router-dom";
import { Route, withRouter } from "react-router";
import { isAuthenticated } from "./utils/user-helper";
const PrivateRoute = ({ component: Component, redirect, ...rest }) => {
  if (isAuthenticated()) {
    return (
      <Route exact path={rest.path} component={() => <Component {...rest} />} />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: redirect ? redirect : "/",
        }}
      />
    );
  }
};

export default withRouter(PrivateRoute);
