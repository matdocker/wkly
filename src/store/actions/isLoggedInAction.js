/*
 * Action creator to define user login state.
 */

const IsLoggedIn = (payload) => {
	return {
		type: 'IS_LOGGED_IN',
		payload,
	};
};
export default IsLoggedIn;
