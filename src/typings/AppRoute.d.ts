import { RouteComponentProps } from "react-router-dom";

interface AppRoute {
	component: React.FC<RouteComponentProps<MatchParams>>;
	path: string;
	getPath: (doc: Doctrine, chapterIndex?: number, sectionIndex?: number) => string,
	title: string;
	exact?: boolean;
}
