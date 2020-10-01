// isFirstTime Action Creator

const isFirstTime = (payload) => {
	return {
		type: 'IS_FIRST_TIME',
		payload,
	};
};
export default isFirstTime;
