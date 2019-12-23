import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import routes from './routes';
import AppStyles from './App.styles';
import { StateProvider, stateKeys } from './StateProvider';
import Layout from '~/global/Layout';
import Meta from '~/configuration/meta';

export default function App() {
	return (
		<StateProvider>
			<Router>
				<Switch>
					{routes.map(route => {
						const { Component, metaConfig, exact, path, layoutType } = route;
						return (
							<Route
								key={path}
								exact={exact}
								path={path}
								render={props => {
									return (
										<>
											<Meta metaConfig={metaConfig} />
											<Global styles={AppStyles} />
											<Layout type={layoutType}>
												<Component {...props} />
											</Layout>
										</>
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
