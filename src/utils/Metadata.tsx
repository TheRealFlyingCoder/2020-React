import React from 'react';
import Helmet from 'react-helmet';

const metadata: React.FC<MetaData> = ({routeProps, pageMeta, gtmId}) => {
	//Meta Data Configurations
	type metaProp = {
		name?: string;
		property?: string;
		content?: string;
	};

	let MetaDataObj: Array<metaProp> = [
		{name: 'title', content: routeProps.title},
		{property: 'og:title', content: routeProps.title},
		{name: 'twitter:title', content: routeProps.title},
	];

	if (pageMeta) {
		MetaDataObj = [
			...MetaDataObj,
			{name: 'twitter:site', content: pageMeta.siteName},
			{name: 'twitter:creator', content: pageMeta.twitterHandle},
			{property: 'og:description', content: pageMeta.description},
			{property: 'og:url', content: pageMeta.url},
			{property: 'og:site_name', content: pageMeta.siteName},
			{property: 'fb:app_id', content: pageMeta.fbId},
			{name: 'twitter:description', content: pageMeta.description},
			{name: 'description', content: pageMeta.description},
			{name: 'keywords', content: pageMeta.keywords},
			{property: 'og:locale', content: pageMeta.locale},
			{property: 'og:type', content: pageMeta.type},
		];

		if (pageMeta.image) {
			MetaDataObj = [
				...MetaDataObj,
				{property: 'og:image', content: pageMeta.image.url},
				{property: 'og:image:width', content: pageMeta.image.width},
				{property: 'og:image:height', content: pageMeta.image.height},
				{name: 'twitter:image', content: pageMeta.image.url},
				{name: 'twitter:card', content: pageMeta.image.url},
			];
		}
	}

	//Google Tag Manager configurations
	const gtmScript = gtmId
		? `<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','${gtmId}');</script>
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

			{gtmId && (
				<noscript>
					<iframe
						title="Google Tag Manager"
						src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
						height="0"
						width="0"
						style={{display: 'none', visibility: 'hidden'}}
					></iframe>
				</noscript>
			)}
		</React.Fragment>
	);
};

export default metadata;
