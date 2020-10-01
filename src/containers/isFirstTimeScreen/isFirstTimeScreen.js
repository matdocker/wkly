// * Import Dependancies Here:
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';

// * Import Components Here:
import Button from '../../components/button';

//  * Import StyleSheets Here:
import theme from '../../styles/appStyle';
import styles from './styleIsFirstTime';

// * Import Actions Here:
import IntroScreen from '../../store/actions/introAction';

const isFirstTimeScreen = (props) => {
	const {introScreens, IntroScreen} = props;
	const [screen, setScreen] = useState(1);

	useEffect(() => {
		IntroScreen(screen);
	}, [screen]);

	const mapParagraph = () => {
		return introScreens.p.map((para) => {
			return <Text style={theme.p}>{para}</Text>;
		});
	};

	/*
	 * Back icon button. When pressed setScreen(screen - 1) to
	 * revert to previous screen
	 */
	const backButton = () => {
		console.log('backbutton');
		if (screen > 1) {
			console.log('backbutton entered');
			setScreen(screen - 1);
		}
	};

	/*
	 * isFirstTimeScreen is used to setup user information
	 * and application settings
	 */

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={() => backButton()}>
				<Icon name='angle-left' size={40} color='black' />
			</TouchableOpacity>
			<View style={styles.flex1}>
				<Image source={introScreens.image} style={styles.introImages} />
			</View>
			<View style={styles.flex2}>
				<Text style={theme.h1}>{introScreens.title}</Text>
				{mapParagraph()}
			</View>
			<View style={styles.flex3}>
				<Button
					type='solid'
					title={introScreens.button}
					color='white'
					disabled={false}
					// icon='user'
					onPressFunction={() => setScreen(screen + 1)}
					delay={300}
				/>
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({
	// hasAccount: state.hasAccount,
	// isLoggedIn: state.isLoggedIn,
	introScreens: state.introScreens,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({IntroScreen}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(isFirstTimeScreen);
