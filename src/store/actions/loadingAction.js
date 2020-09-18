/*
* Action creator to switch between application loading state.
*/

export default function LoadingState( payload ) {
  return (
    {
      type: 'LOADING_STATE',
      payload,
    }
  )
}