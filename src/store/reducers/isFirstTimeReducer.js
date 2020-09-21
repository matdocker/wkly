/*
 * isFirstTime Reducer provides user information and settings
 */

// initialState for isFirstTime
const initialState = true;

const value = 'IS_FIRST-TIME';

const isFirstTime = (state = initialState, action) => {
	switch (action.type) {
		case value:
			return action.payload;

		default:
			return state;
	}
};

export default isFirstTime;
