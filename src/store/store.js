import { combineReducers } from 'redux'
import isLoading from './reducers/loadingReducer'
import hasAccount from './reducers/loginRegisterReducer'


export default combineReducers( {
  hasAccount,
  isLoading,
} )
