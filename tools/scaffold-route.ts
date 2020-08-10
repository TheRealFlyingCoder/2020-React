import fs from 'fs';
import path from 'path';
import camelMessages from './scaffoldUtils/camelMessages';
import generateCodeScaffold from './scaffoldUtils/Route/generateCodeScaffold';

//Grab the name if it was passed and validate
const routeName = process.argv[2];

if (!routeName) {
	camelMessages.error('Route name was not passed.');
	process.exit();
} else if (!/^[A-Z][A-Za-z]+$/.test(routeName)) {
	camelMessages.error('Route names start with an uppercase letter and contain only letters.');
	process.exit();
}

//Once validated, confirm the component doesn't already exist
const routePath = path.join('src/routes', routeName);

if (fs.existsSync(routePath)) {
	camelMessages.error(`Route already exists, at '${routePath}'.`);
	process.exit();
}

//Now lets generate!
(async () => {
	try {
		generateCodeScaffold(routeName, routePath);
		camelMessages.success(`The ${routeName} route has been created!`);
	} catch (e) {
		camelMessages.error(e);
		process.exit();
	}
})();
