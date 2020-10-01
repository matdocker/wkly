import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
//* React Springs Animation
import {Spring} from 'react-spring/renderprops-native';
import {bindActionCreators} from 'redux';
import Button from '../../components/button';
//* Components
import TextInput from '../../components/textInput';
//* import actions
import LoginRegister from '../../store/actions/loginRegisterAction';
import IsLoggedIn from '../../store/actions/isLoggedInAction';
//* Container StyleSheet
import Style from './styleLoginScreen';

/* 
	TODO: Add firebase auth
	TODO: Add firebase firestore
 */

const loginScreen = (props) => {
	// ! props not in use - delete
	// const {isLoggedIn, hasAccount} = props;

	/*
* Render logo with springs animation and call above
* TextInput, with in textInput view.
    TODO: Add/Update logo
*/
	const renderLogo = () => {
		return (
			<Spring
				from={{opacity: 0}}
				to={{opacity: 1}}
				config={{
					tension: 210,
					friction: 20,
					delay: 50,
				}}>
				{(style) => (
					<View style={style}>
						{/* <Image style={Style.logo} source={logo} /> */}
						<Text style={Style.wkly}>WKLY</Text>
					</View>
				)}
			</Spring>
		);
	};

	/*
* Render register block where if user does not
* have an account the user can opt to register
    TODO: assign login register action creator to register touchableOpacity
*/
	const renderRegister = () => {
		return (
			<Spring
				from={{opacity: 0}}
				to={{opacity: 1}}
				config={{
					tension: 210,
					friction: 20,
					delay: 500,
				}}>
				{(style) => (
					<View style={style}>
						<View style={Style.socialLogin}>
							<Text>Don't have an account,</Text>
							<TouchableOpacity onPress={() => props.LoginRegister(false)}>
								<Text style={Style.registerBtn}> register!</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</Spring>
		);
	};
	return (
		<View style={Style.loginScreenCont}>
			<View style={Style.whiteSpace} />
			<View style={Style.textInput}>
				{renderLogo()}
				<TextInput
					placeholder='Email'
					textContentType='emailAdress'
					secureTextEntry={false}
					delay={100}
				/>
				<TextInput
					placeholder='Password'
					textContentType='password'
					secureTextEntry
					passwordRules='required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 6;'
					delay={200}
				/>
				<Button
					type='outline'
					title='Login'
					color='black'
					disabled={false}
					icon='user'
					onPressFunction={() => {
						props.IsLoggedIn(true);
					}}
					delay={300}
				/>
				<Button
					type='solid'
					title='Login with Facebook'
					color='white'
					disabled={false}
					icon='facebook'
					onPressFunction={() => console.log('Login with Facebook!!')}
					delay={400}
				/>
			</View>
			{renderRegister()}
		</View>
	);
};
const mapStateToProps = (state) => ({
	hasAccount: state.hasAccount,
	isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({LoginRegister, IsLoggedIn}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(loginScreen);
