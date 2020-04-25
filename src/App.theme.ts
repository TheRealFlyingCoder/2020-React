const breakpoints = {
	xsmall: 320,
	small: 640,
	medium: 768, //ipad portrait
	large: 1023, //ipad landscape
	xlarge: 1244, //1280px screen resolution minus scrollbars
	xxlarge: 1410, // 1440px screen resolution minus scrollbars
}

export default {
	colours: {
		primary: '#2C2B25',
		secondary: '#FFFFFF',
		tertiary: '#A7A491',
		quaternary: '#547882',
		quinary: '#CECCC0',

		accent: '#4F7781',
		accentlight: '#5C8995',
		modalaccent: '#17BEBB',
	},
	breakpoints,
	mediaQueries: {
		xsmall: `@media screen and (min-width: ${breakpoints.xsmall}px)`,
		small: `@media screen and (min-width: ${breakpoints.small}px)`,
		medium: `@media screen and (min-width: ${breakpoints.medium}px)`, //ipad portrait
		large: `@media screen and (min-width: ${breakpoints.large}px)`, //ipad landscape
		xlarge: `@media screen and (min-width: ${breakpoints.xlarge}px)`, //1280px screen resolution minus scrollbars
		xxlarge: `@media screen and (min-width: ${breakpoints.xxlarge}px)`, // 1440px screen resolution minus scrollbars
	},
	layer: {
	},
	typography: {
		size: '15px',
		lineHeight: '24px',
		font: `'Roboto', sans-serif, Open Sans, sans-serif`,
	},
	sideNav: {
		width: '410px'
	}
};

