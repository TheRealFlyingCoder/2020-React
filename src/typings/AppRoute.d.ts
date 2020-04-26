import { RouteComponentProps } from "react-router-dom";

interface AppRoute {
	component: React.FC<RouteComponentProps>;
	path: string;
	title: string;
	exact?: boolean;
}