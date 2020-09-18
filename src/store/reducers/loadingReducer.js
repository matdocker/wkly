/*
 * Application Loading state reducer.
 */

// Reducer initial state.
const initialState = false;

// Reducer function and switch statement
export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOADING_STATE':
			return action.payload;

		default:
			return state;
	}
};
