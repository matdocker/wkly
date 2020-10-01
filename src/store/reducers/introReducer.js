/*
 * introReducer provides user information and settings
 */

// * Import Images Here:
const imageOne = require('../../assets/images/png/071-share.png');
const imageTwo = require('../../assets/images/png/016-desktop_computer.png');
const imageThree = require('../../assets/images/png/071-share.png');
const imageFour = require('../../assets/images/png/071-share.png');

// initialState for introReducer
const initialState = {
	title: 'Welcome',
	p: [
		'In a world where spending is easy with tap & go. It is harder than ever to manage our finances',
	],
	button: 'Tell Me More',
	image: imageOne,
};

const screenOne = 1;
const screenTwo = 2;
const screenThree = 3;

const introOne = {
	title: 'Welcome to Wkly',
	p: ['Today spending is easy with tap and go, and managing our money is harder than ever.'],
	button: 'Tell Me More',
	image: imageOne,
};

const introTwo = {
	title: 'Wkly is a method',
	p: [
		'Wkly makes managing our money simple. After our initial setup we will spend only 5 minutes a week planning our weekly expenses. ',
	],
	button: 'Keep Going',
	image: imageTwo,
};

const introThree = {
	title: 'Account Setup',
	p: ['The method requires 3 bank accounts:', 'Everyday Account, Bills Account, & Savings Account'],
	button: 'I Have These Accounts',
	image: imageTwo,
};

const introReducer = (state = initialState, action) => {
	console.log('Intro Reducer');
	if (action.type === 'INTRO_SCREENS')
		switch (action.payload) {
			case screenOne:
				return introOne;
			case screenTwo:
				return introTwo;
			case screenThree:
				return introThree;
			default:
				return state;
		}
	return state;
};

export default introReducer;
