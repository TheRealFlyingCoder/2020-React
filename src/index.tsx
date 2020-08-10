import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './polyfills';
import App from './App';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'),
);