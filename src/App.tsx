import React from 'react';
import { Global } from '@emotion/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import AsyncStateProvider from 'utils/AsyncStateProvider';
// import Metadata from 'utils/Metadata';
import appStyles from './App.styles';
import appLoader from './App.loader';
import AsyncState from './App.state';
import AppUtilities from './App.utils';

const App: React.FC = () => (
    <>
        <Global styles={appStyles} />
        <AsyncStateProvider asyncStateFunction={AsyncState} Loader={appLoader}>
            <AppUtilities />
            <Router>
                <Switch>
                    {Object.keys(routes).map(key => {
                        const route = routes[key];
                        const { component: Component, exact, path } = route;
                        return (
                            <Route
                                key={path}
                                exact={exact}
                                path={path}
                                render={props => {
                                    return (
                                        <React.Fragment>
                                            {/* <Metadata routeProps={route} /> */}
                                            <Component {...props} />
                                        </React.Fragment>
                                    );
                                }}
                            />
                        );
                    })}
                </Switch>
            </Router>
        </AsyncStateProvider>
    </>
);

export default App;
