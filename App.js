import React, {Component} from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// * Containers & Navigation Handlers
import Navigation from './src/navigation/navigator/navigator';
import LoginRegisterManager from './src/navigation/loginRegisterManager/loginRegisterManager';
import Store from './src/store/store';

// * App StyleSheet
import Style from './src/styles/appStyle';

const store = createStore(Store);

const App = (props) => {
	return (
		<Provider store={store}>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView style={Style.safeArea}>
				<Navigation />
			</SafeAreaView>
		</Provider>
	);
};

export default App;
