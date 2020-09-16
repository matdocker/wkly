import React, { Component } from 'react'
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

//* Container StyleSheet
import Style from './styleLoginRegisterManager'

//  * Screens
import LoginScreen from '../../containers/loginScreen/loginScreen'

function loginRegisterManager() {
  return (
    <LoginScreen />
  )
}

const mapStateToProps = ( state ) => ( {} )

const mapDispatchToProps = {}

export default connect( mapStateToProps, mapDispatchToProps )( loginRegisterManager )
