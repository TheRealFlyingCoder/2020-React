import Theme from 'Theme';

const AsyncState = async (): Promise<AppState | null> => {
	const isDesktop = window.innerWidth > Theme.breakpoints.large;
	const isIE = ['MSIE', 'Trident', 'Edge'].some(v => window.navigator.userAgent.includes(v));
	return ({
		isDesktop,
		isIE
	})
}

export default AsyncState;