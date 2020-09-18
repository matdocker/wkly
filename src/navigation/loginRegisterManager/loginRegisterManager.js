import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//* Screens
import LoadingScreen from '../../components/loading';
import LoginScreen from '../../containers/loginScreen/loginScreen';
import RegisterScreen from '../../containers/registerScreen/registerScreen';
//* Actions
import LoadingState from '../../store/actions/loadingAction';
import LoginRegister from '../../store/actions/loginRegisterAction';

function loginRegisterManager(props) {
	const {hasAccount, isLoading} = props;

	if (isLoading === true) {
		// ! isLoading Reducer initial state is set to false!!
		return <LoadingScreen visible={isLoading} />;
	}

	if (hasAccount === true) {
		return <LoginScreen />;
	}
	if (props.hasAccount === false) {
		return <RegisterScreen />;
	}
}

const mapStateToProps = (state) => ({
	hasAccount: state.hasAccount,
	isLoading: state.isLoading,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({LoginRegister, LoadingState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(loginRegisterManager);
