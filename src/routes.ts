import Home from './routes/Home/Home';
import NotFound from './routes/NotFound';

const Routes = {
	Home: {
		title: 'Home',
		path: '/',
		exact: true,
		component: Home,
	},
	NotFound: {
		title: '404',
		path: '/404',
		exact: true,
		component: NotFound,
	}
};

export default Routes;
