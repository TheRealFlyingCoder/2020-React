import { AppRoute } from 'typings/AppRoute';
import Home from './routes/Home/Home';

const routes: ObjectMap<AppRoute> = {
	Home: {
		title: 'Home',
		path: '/',
		exact: true,
		component: Home,
	}
};

export default routes;
