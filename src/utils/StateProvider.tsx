import React, { createContext, useContext, useReducer } from 'react';

//Simple reducer allowing you to alter any of the top level
//objects in the state
const reducer = (state: AppState, action: Partial<AppState>): AppState => {
	return {
		...state,
		...action,
	};
};

export const StateContext = createContext({});

interface ProviderProps {
	initialState: AppState;
}

export const StateProvider: React.FC<ProviderProps> = ({ children, initialState }): JSX.Element => {
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
};

//@ts-ignore
export const useStateValue = (): [AppState, (stateUpdate: Partial<AppState>) => void] => useContext(StateContext);
