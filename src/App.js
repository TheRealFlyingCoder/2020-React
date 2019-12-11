import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import routes from "./routes";
import AppStyles from "./App.styles";
import { StateProvider } from "./StateProvider";

export default function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          {routes.map(route => {
            const { component: Component, exact, path } = route;
            return (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={props => {
                  return (
                    <React.Fragment>
                      <Global styles={AppStyles} />
                      <Component {...props} />
                    </React.Fragment>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </StateProvider>
  );
}
