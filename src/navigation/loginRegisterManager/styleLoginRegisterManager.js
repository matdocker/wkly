import { StyleSheet } from 'react-native'

/*
*StyleSheet for Login Register Manager
*/

export default StyleSheet.create( {
  loginScreenCont: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignContent: 'space-around',
    // flexDirection: 'column',

  },
  wkly: {
    fontSize: 50,
    textAlign: 'center',
    marginVertical: 50,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  logo: {
    // textAlign: 'center',

    alignSelf: 'center',

  },
  textInput: {
    textAlign: 'center',
    // flex: 1,
  },
  socialLogin: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerBtn: {
    color: 'red',
    textTransform: 'capitalize',
    fontWeight: '700',
  },
} )
