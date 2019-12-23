
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '~/configuration/polyfills';

ReactDOM.render(
	<App/>,
	window.document.getElementById('app'),
);