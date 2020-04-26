import React from 'react';
import {Global} from '@emotion/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from 'routes';
import Metadata from 'utils/Metadata';
import {StateProvider} from 'utils/StateProvider';
import appStyles from './App.styles';
import appState from './App.state';
//For Async app loading use the below with an async function returning state
//import { AsyncStateProvider } from 'utils/AsyncStateProvider';

const App: React.FC = () => (
	<BrowserRouter>
		<StateProvider initialState={appState}>
			<Global styles={appStyles} />
			<Switch>
				{Object.keys(routes).map(key => {
					const route = routes[key];
					const {component: Component, exact, path} = route;
					return (
						<Route
							key={path}
							exact={exact}
							path={path}
							render={props => {
								return (
									<React.Fragment>
										<Metadata routeProps={route} />
										<Component {...props} />
									</React.Fragment>
								);
							}}
						/>
					);
				})}
			</Switch>
		</StateProvider>
	</BrowserRouter>
);

export default App;
