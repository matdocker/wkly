/*
* Action creator to switch between login and
* Register application state.
*/

export default function LoginRegister( payload ) {
  return (
    {
      type: 'LOGIN_REGISTER',
      payload,
    }
  )
}
