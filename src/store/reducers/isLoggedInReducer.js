/*
 * isLoggedIn Reducer provides login state of the user
 */

// initialState for isLoggedIn
const initialState = false;

const value = 'IS_LOGGED_IN';

export default (state = initialState, action) => {
	switch (action.type) {
		case value:
			return action.payload;

		default:
			return state;
	}
};
