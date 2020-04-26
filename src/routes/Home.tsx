import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ExampleComponent from '../components/ExampleComponent';
import styles from './Home.styles';

const Home: React.FC<RouteComponentProps> = () => {
	return (
		<div css={styles}>
			<h1>Hello World</h1>
			<p>I'm not a designer, don't @ me... this code is lit</p>
			<ExampleComponent />
		</div>
	);
};

export default Home;
