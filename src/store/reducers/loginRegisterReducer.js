
/*
* Login Register application state reducer.
*/

// Reducer initial state.
const initialState = true

// Reducer function and switch statement
export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'LOGIN_REGISTER':
        
      return action.payload

    default:
      return state
  }
}
