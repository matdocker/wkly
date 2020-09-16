import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//* Container StyleSheet
import { Spring, config } from 'react-spring/renderprops-native'

// * React Springs Animation
import Style from './styleLoginScreen'

//* Components
import TextInput from '../../components/textInput'
import Button from '../../components/button'

export default function loginScreen() {
  /*
* Render logo with springs animation and call above
* TextInput, with in textInput view.

TODO: Add/Update logo
*/
  function renderLogo() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{
          tension: 50, friction: 10, delay: 50,
        }}
      >
        {( style ) => (
          <View style={style}>
            {/* <Image style={Style.logo} source={logo} /> */}
            <Text style={Style.wkly}>WKLY</Text>
          </View>
        )}
      </Spring>
    )
  }

  /*
* Render register block where if user does not
* have an account the user can opt to register
*/
  function renderRegister() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{
          tension: 100, friction: 10, delay: 500,
        }}
      >
        {( style ) => (
          <View style={style}>
            <View style={Style.socialLogin}>
              <Text>
                Don't have an account,
              </Text>
              <TouchableOpacity><Text style={Style.registerBtn}> register!</Text></TouchableOpacity>
            </View>
          </View>
        )}
      </Spring>
    )
  }
  return (
    <View style={Style.loginScreenCont}>
      <View style={Style.whiteSpace} />
      <View style={Style.textInput}>
        {renderLogo()}
        <TextInput placeholder="Email" textContentType="emailAdress" secureTextEntry={false} delay={100} />
        <TextInput placeholder="Password" textContentType="password" secureTextEntry passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 6;" delay={200} />
        <Button type="outline" title="Login" color="black" disabled={false} icon="user" onPressFunction={() => console.log( 'Login!!' )} delay={300} />
        <Button type="solid" title="Login in with Facebook" color="white" disabled={false} icon="facebook" onPressFunction={() => console.log( 'Facebook!!' )} delay={400} />
      </View>

      {renderRegister()}

    </View>
  )
}
