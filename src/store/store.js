import {combineReducers} from 'redux';
import isLoading from './reducers/loadingReducer';
import hasAccount from './reducers/loginRegisterReducer';
import isLoggedIn from './reducers/isLoggedInReducer';

export default combineReducers({
	hasAccount,
	isLoading,
	isLoggedIn,
});
