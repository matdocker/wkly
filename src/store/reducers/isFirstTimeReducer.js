/*
 * isFirstTime Reducer provides user information and settings
 */

// initialState for isFirstTime
const initialState = true;

const value = 'IS_FIRST-TIME';

export default (state = initialState, action) => {
	switch (action.type) {
		case value:
			return action.payload;

		default:
			return state;
	}
};
