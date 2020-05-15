import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import routes from 'routes';
import ExampleComponent from 'components/ExampleComponent';
import styles from './Home.styles';

const Home: React.FC<RouteComponentProps> = ({ history }) => {

	const goHome = (): void => {
		history.push(routes.Home.path)
	}
	return (
		<div css={styles}>
			<h1>Hello World</h1>
			<p>I'm not a designer, don't @ me... this code is beautiful</p>
			<ExampleComponent />
			<button onClick={goHome}>Go Home</button>
		</div>
	);
};

export default Home;
