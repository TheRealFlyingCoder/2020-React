import React from 'react';
import { Global } from '@emotion/core';
import { Route, Switch, Redirect } from 'react-router-dom';
import Routes from 'Routes';
import Metadata from 'utils/Metadata';
import { StateProvider } from 'utils/StateProvider';
import Header from 'components/Header';
import Footer from 'components/Footer';
import appStyles from './App.styles';
import appState from './App.state';
//For Async app loading use the below with an async function returning state
//import { AsyncStateProvider } from 'utils/AsyncStateProvider';

const App: React.FC = () => (
	<StateProvider initialState={appState}>
		<Global styles={appStyles} />
		<Switch>
			{Object.values(Routes).map(route => {
				const { component: Component, exact, path } = route;
				return (
					<Route
						key={path}
						exact={exact}
						path={path}
						render={props => {
							return (
								<div className="route">
									<Metadata routeProps={route} />
									<Header />
									<Component {...props} />
									<Footer />
								</div>
							);
						}}
					/>
				);
			})}
			{/* This will redirect to the 404 path if no above routes are matched */}
			<Redirect to={Routes.NotFound.path} />
		</Switch>
	</StateProvider>
);

export default App;
