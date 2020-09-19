import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//* React Springs Animation
import {Spring, config} from 'react-spring/renderprops-native';

//* Container StyleSheet
import Style from './styleRegisterScreen';

//* Components
import TextInput from '../../components/textInput';
import Button from '../../components/button';

//* import actions
import LoginRegister from '../../store/actions/loginRegisterAction';

const registerScreen = (props) => {
	/*
* Render logo with springs animation and call above
* TextInput, with in textInput view.
    TODO: Add/Update logo
*/
	function renderLogo() {
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
	}

	/*
* Render register block where if user does not
* have an account the user can opt to register
  TODO: assign login register action creator to register touchableOpacity
*/
	function renderRegister() {
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
							<Text>Already have an account,</Text>
							<TouchableOpacity onPress={() => props.LoginRegister(true)}>
								<Text style={Style.registerBtn}> Login!</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</Spring>
		);
	}
	return (
		<View style={Style.registerScreenCont}>
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
					title='Register'
					color='black'
					disabled={false}
					icon='user'
					onPressFunction={() => console.log('Register!!')}
					delay={300}
				/>
				<Button
					type='solid'
					title='Register with Facebook'
					color='white'
					disabled={false}
					icon='facebook'
					onPressFunction={() => console.log('Facebook!!')}
					delay={400}
				/>
			</View>
			{renderRegister()}
		</View>
	);
};
const mapStateToProps = (state) => ({
	hasAccount: state.hasAccount,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators({LoginRegister}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(registerScreen);
