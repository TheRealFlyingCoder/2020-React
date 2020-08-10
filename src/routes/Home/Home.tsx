import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './Home.styles';

const Home: React.FC<RouteComponentProps> = () => (
	<main css={styles}>
		<h1>Hello World</h1>
		<p>You didn't come here for the UI, so go dive into the code.</p>
	</main>
);

export default Home;
