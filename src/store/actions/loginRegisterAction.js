/*
 * Action creator to switch between login and
 * Register application state.
 */

const LoginRegister = (payload) => {
	return {
		type: 'LOGIN_REGISTER',
		payload,
	};
};
export default LoginRegister;
