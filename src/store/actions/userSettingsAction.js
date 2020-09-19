/*
 * Action creator to define new user.
 */

export default function IsFirstTime(payload) {
	return {
		type: 'IS_FIRST_TIME',
		payload,
	};
}
