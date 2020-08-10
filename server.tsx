import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import Routes from 'Routes';
import './src/polyfills';
import App from './src/App';

const PORT = process.env.PORT || 3006;
const app = express();

fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
	if (err) {
		console.error('Something went wrong:', err);
		return;
	} else {
		const renderHtml = (url: string): string => {
			const context = {};
			//Create the rendered HTML for this route
			const app = ReactDOMServer.renderToString(
				<StaticRouter context={context} location={url}>
					<App />
				</StaticRouter>,
			);

			return data.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
		};

		//For every Route that we've registered render the HTML 
		//and create a listener that serves it
		Object.values(Routes).forEach(({ path: urlPath }) => {
			const renderedHtml = renderHtml(urlPath);
			app.get(urlPath, (_req, res) => {
				res.send(renderedHtml);
			});
		});

		app.use(express.static('./dist'));
		app.listen(PORT, () => {
			console.log(`Server is listening on port ${PORT}`);
		});
	}
});
