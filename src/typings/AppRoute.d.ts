import { RouteComponentProps } from "react-router-dom";

interface AppRoute {
	component: React.FC<RouteComponentProps>;
	path: string;
	title: string;
	exact?: boolean;
	meta?: MetaData;
}

interface MetaData {
	image?: {
		url: string;
		width: string;
		height: string;
	};
	twitterHandle?: string;
	fbId?: string;
	siteName?: string;
	description?: string;
	type?: string;
	locale?: string;
	url?: string;
	keywords?: string;
	gtmId?: string;
}