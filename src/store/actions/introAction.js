// intro Action determines which intro screen to render

const IntroScreen = (payload) => {
	console.log(`IntroScreen action screen called: ${payload}`);
	return {
		type: 'INTRO_SCREENS',
		payload,
	};
};

export default IntroScreen;
