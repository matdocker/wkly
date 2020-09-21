/*
 * Application Loading state reducer.
 */

// Reducer initial state.
const initialState = false;

// Reducer function and switch statement
const loading = (state = initialState, action) => {
	switch (action.type) {
		case 'LOADING_STATE':
			return action.payload;

		default:
			return state;
	}
};
export default loading;
