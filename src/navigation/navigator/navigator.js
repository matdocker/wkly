import React from 'react';
import {bindActionCreators} from 'redux';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

// Screens
import LoginRegisterManager from '../loginRegisterManager/loginRegisterManager';

function navigator(props) {
	const {isLoggedIn, isFirstTime} = props;
	// * if login state is == false return login manager screen
	if (isLoggedIn === false) {
		return <LoginRegisterManager />;
	}
	// * if login state is == true return
	if (isLoggedIn === true) {
		if (isFirstTime === true) return <Text>Logged In && First Time</Text>;
	}
}
const mapStateToProps = (state) => ({
	isLoggedIn: state.isLoggedIn,
	isFirstTime: state.isFirstTime,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(navigator);
