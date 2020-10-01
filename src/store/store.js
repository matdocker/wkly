import {combineReducers} from 'redux';
import isLoading from './reducers/loadingReducer';
import hasAccount from './reducers/loginRegisterReducer';
import isLoggedIn from './reducers/isLoggedInReducer';
import isFirstTime from './reducers/isFirstTimeReducer';
import introReducer from './reducers/introReducer';

const CombindeReducer = combineReducers({
	hasAccount,
	isLoading,
	isLoggedIn,
	isFirstTime,
	introScreens: introReducer,
});

export default CombindeReducer;
