interface MetaData {
	routeProps: AppRoute;
	pageMeta?: {
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
	};
	gtmId?: string;
}