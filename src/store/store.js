import {combineReducers} from 'redux';
import isLoading from './reducers/loadingReducer';
import hasAccount from './reducers/loginRegisterReducer';
import isLoggedIn from './reducers/isLoggedInReducer';

const CombindeReducer = combineReducers({
	hasAccount,
	isLoading,
	isLoggedIn,
});

export default CombindeReducer;
