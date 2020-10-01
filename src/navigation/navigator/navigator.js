import React from 'react';
import {bindActionCreators} from 'redux';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

// Screens
import LoginRegisterManager from '../loginRegisterManager/loginRegisterManager';
import IsFirstTimeScreen from '../../containers/isFirstTimeScreen/isFirstTimeScreen';

const navigator = (props) => {
	const {isLoggedIn, isFirstTime} = props;
	// * if login state is == false return login manager screen
	if (isLoggedIn === false) {
		return <LoginRegisterManager />;
	}
	// * if login state is == true return
	if (isLoggedIn === true) {
		if (isFirstTime === true) {
			return <IsFirstTimeScreen />;
		}
		if (isFirstTime === false) {
			return <Text>Logged In && not First Time</Text>;
		}
	}
};
const mapStateToProps = (state) => ({
	isLoggedIn: state.isLoggedIn,
	isFirstTime: state.isFirstTime,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(navigator);
