import React, { useEffect } from 'react';
import { useStateValue } from 'StateProvider';
import Theme from 'Theme';

const AppUtilities: React.FC = () => {
	const [{ isDesktop }, setState] = useStateValue();

	useEffect(() => {
		const handleResize = (): void => {
			const newIsDesktop = window.innerWidth > Theme.breakpoints.large;
			if (newIsDesktop !== isDesktop) {
				setState({
					isDesktop: newIsDesktop,
				})
			}
		}
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [isDesktop]);

	return null;
};

export default AppUtilities;