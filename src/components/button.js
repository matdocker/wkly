import React from 'react'

// * Component StyleSheet
import {
  StyleSheet, Text, View,
} from 'react-native'

// * Imports
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

//* React Spring Animation
import { Spring, config } from 'react-spring/renderprops-native'

const button = ( props ) => {
  const {
    title, disabled, color, icon, onPressFunction, delay, type,
  } = props

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{
        tension: 50, friction: 5, delay,
      }}
    >
      {( style ) => (
        <View style={style}>
          <Button
            icon={(
              <Icon
                name={icon}
                size={20}
                color={color}
                style={{ marginHorizontal: 10 }}
              />

  )}
            titleStyle={{ fontSize: 20, color }}
            title={title}
            color={color}
            disabled={disabled}
            containerStyle={{ marginBottom: 10 }}
            type={type}
            buttonStyle={{ borderColor: color }}
            onPress={() => onPressFunction()}
          />
        </View>
      )}

    </Spring>

  )
}

export default button

const styles = StyleSheet.create( {

} )
