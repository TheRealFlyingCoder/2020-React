import React, {createContext, useContext, useReducer} from 'react';

//Simple reducer allowing you to alter any of the top level
//objects in the state
const reducer = (state: AppState, action: Partial<AppState>): AppState => {
	const newObject = {
		...state,
		...action,
	}
	if(state.persistenceId) {
		localStorage.setItem(state.persistenceId, JSON.stringify(newObject));
	}
	return newObject
};

export const StateContext = createContext({});

export const StateProvider: React.FC<{initialState: AppState}> = ({children, initialState}) => {
	let state = initialState;
	if(initialState.persistenceId) {
		const localState = localStorage.getItem(initialState.persistenceId);
		if(!!localState) {
			state = JSON.parse(localState);
		}
	}

	return (
		<StateContext.Provider value={useReducer(reducer, state)}>
			{children}
		</StateContext.Provider>
	)
};

//@ts-ignore
export const useStateValue = (): [AppState, (stateUpdate: Partial<AppState>) => void] => useContext(StateContext);