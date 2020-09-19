/*
 * Action creator to define user login state.
 */

export default function IsLoggedIn(payload) {
	return {
		type: 'IS_LOGGED_IN',
		payload,
	};
}
