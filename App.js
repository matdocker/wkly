import React, { Component } from 'react'
import {
  View, Text, StatusBar, SafeAreaView,
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// * Containers & Navigation Handlers
import LoginRegisterManager from './src/navigation/loginRegisterManager/loginRegisterManager'
import Store from './src/store/store'

// * App StyleSheet
import Style from './src/styles/appStyle'

const store = createStore( Store )

export class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {

    }
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={Style.safeArea}>
          <LoginRegisterManager />
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App
