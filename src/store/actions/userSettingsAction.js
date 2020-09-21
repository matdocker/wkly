/*
 * Action creator to define new user.
 */

const IsFirstTime = (payload) => {
	return {
		type: 'IS_FIRST_TIME',
		payload,
	};
};
export default IsFirstTime;
