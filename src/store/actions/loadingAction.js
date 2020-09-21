/*
 * Action creator to switch between application loading state.
 */

const LoadingState = (payload) => {
	return {
		type: 'LOADING_STATE',
		payload,
	};
};

export default LoadingState;
