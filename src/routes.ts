import { AppRoute } from 'typings/AppRoute';
import Home from './routes/Home';

const routes: ObjectMap<AppRoute> = {
	Home: {
		title: 'Home',
		exact: true,
		path: '/',
		getPath: () => routes.Home.path,
		component: Home,
	},
};

export default routes;
