import React from 'react';
import Helmet from 'react-helmet';
import { AppRoute } from 'typings/AppRoute';

const metadata: React.FC<{ routeProps: AppRoute }> = ({ routeProps }) => {
	const { title, meta } = routeProps;
	//Meta Data Configurations
	type metaProp = {
		name?: string;
		property?: string;
		content?: string;
	};

	let MetaDataObj: Array<metaProp> = [
		{ name: 'title', content: title },
		{ property: 'og:title', content: title },
		{ name: 'twitter:title', content: title },
	];

	if (!!meta) {
		MetaDataObj = [
			...MetaDataObj,
			{ name: 'twitter:site', content: meta.siteName },
			{ name: 'twitter:creator', content: meta.twitterHandle },
			{ property: 'og:description', content: meta.description },
			{ property: 'og:url', content: meta.url },
			{ property: 'og:site_name', content: meta.siteName },
			{ property: 'fb:app_id', content: meta.fbId },
			{ name: 'twitter:description', content: meta.description },
			{ name: 'description', content: meta.description },
			{ name: 'keywords', content: meta.keywords },
			{ property: 'og:locale', content: meta.locale },
			{ property: 'og:type', content: meta.type },
		];

		if (meta.image) {
			MetaDataObj = [
				...MetaDataObj,
				{ property: 'og:image', content: meta.image.url },
				{ property: 'og:image:width', content: meta.image.width },
				{ property: 'og:image:height', content: meta.image.height },
				{ name: 'twitter:image', content: meta.image.url },
				{ name: 'twitter:card', content: meta.image.url },
			];
		}
	}

	//Google Tag Manager configurations
	const gtmScript = meta?.gtmId
		? `<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','${meta.gtmId}');</script>
	<!-- End Google Tag Manager -->`
		: null;

	return (
		<React.Fragment>
			<Helmet meta={MetaDataObj.filter(item => item.content)}>
				<title>{routeProps.title}</title>
				{/* These links define language alternatives if available for SEO purposes */}
				<link rel="canonical" href="/" />
				{gtmScript}
				{/* <link rel="alternate" href="/es" hrefLang="es" /> */}
			</Helmet>

			{meta?.gtmId && (
				<noscript>
					<iframe
						title="Google Tag Manager"
						src={`https://www.googletagmanager.com/ns.html?id=${meta.gtmId}`}
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
			)}
		</React.Fragment>
	);
};

export default metadata;