/* eslint-disable react/prop-types */

import React, { useState } from 'react'
import {
  StyleSheet, TextInput, View, Text,
} from 'react-native'

//* React Spring Animation
import { Spring, config } from 'react-spring/renderprops-native'

function textInput( props ) {
  /*
    * Use Hooks and Props declaration (deconstructing)

    */
  const {
    placeholder, secureTextEntry, passwordRules, delay,
  } = props
  const [textValue, setTextValue] = useState()
  return (

    <View>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ tension: 210, friction: 20, delay }}

      >
        {( style ) => (
          <View style={style}>
            <TextInput
              style={styles.textInput}
              onChangeText={( text ) => setTextValue( text )}
              value={textValue}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              passwordRules={passwordRules}
            />
          </View>
        )}
      </Spring>

    </View>

  )
}

export default textInput

const styles = StyleSheet.create( {
  textInput: {
    borderBottomWidth: 2,
    backgroundColor: 'transparent',
    fontSize: 15,
    alignSelf: 'stretch',
    height: 50,
    marginBottom: 10,
  },
} )
