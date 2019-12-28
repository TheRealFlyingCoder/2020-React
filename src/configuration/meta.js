import React from 'react';
import { Helmet } from 'react-helmet';

export const MetaConfig = {
	title: '',
	description: '',
	image: '',
	twitterHandle: '@theflyingcoder1',
	type: 'article',
};

export default ({ metaConfig }) => {
	return (
		<Helmet>
			<title>{metaConfig.title}</title>
			<meta name="description" content={metaConfig.description} />
			<meta name="twitter:site" content={metaConfig.twitterHandle} />
			<meta name="twitter:creator" content={metaConfig.twitterHandle} />
			<meta name="twitter:title" content={metaConfig.title} />
			<meta name="twitter:description" content={metaConfig.description} />
			<meta name="twitter:image" content={metaConfig.image} />
			<meta name="og:title" content={metaConfig.title} />
			<meta name="og:type" content={metaConfig.type} />
			<meta name="og:url" content={window.location.href} />
			<meta name="og:image" content={metaConfig.image} />
			<meta name="og:description" content={metaConfig.description} />
			{metaConfig.custom && metaConfig.custom.map(meta => {
				return meta.tag 
					? React.createElement(meta.tag, meta.props, meta.content)
					: meta;
			})}
		</Helmet>
	);
};
