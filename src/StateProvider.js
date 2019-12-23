import React, { createContext, useContext, useReducer } from 'react';

//Simple reducer allowing you to alter any of the top level
//objects in the state
const reducer = (state, action) => {
	return {
		...state,
		[action.key]: action.data,
	};
};

const initialState = {
	Data: {},
};
export const stateKeys = {
	Data: 'data',
};

export const StateProvider = ({ children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const StateContext = createContext();

/// USAGE ///
//
// import { useStateValue, stateKeys } from "~/StateProvider";
//
// const component = () => {
//   const [state, setState] = useStateValue();
//
//   setState({
//     key: stateKeys.Data,
//     data: {
//       ...state,
//       mockKey: 'mockValue'
//     }
//   })
// }
