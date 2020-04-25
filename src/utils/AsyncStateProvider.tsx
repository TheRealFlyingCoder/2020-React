import React, { useState, useEffect } from 'react';
import { StateProvider } from './StateProvider';

interface ProviderProps {
	asyncStateFunction: () => Promise<AppState | null>;
	Loader: React.FC
}

const AsyncStateProvider: React.FC<ProviderProps> = ({ children, asyncStateFunction, Loader }) => {
	const [appState, setData] = useState<AppState | null>(null);

	useEffect(() => {
		asyncStateFunction().then(state => {
			setData(state);
		});
	}, []);

	return !!appState ? (
		<StateProvider initialState={appState}>
			{children}
		</StateProvider>
	) : (
		<Loader />
	);
};

export default AsyncStateProvider;