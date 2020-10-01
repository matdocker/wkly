import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'stretch',
		flex: 1,
	},
	flex1: {
		flex: 3,
		justifyContent: 'center',
		alignContent: 'center',
	},
	flex2: {flex: 1, justifyContent: 'flex-end'},
	flex3: {flex: 1, justifyContent: 'flex-end', marginVertical: 10},
	backButton: {
		position: 'absolute',
		top: 0,
		left: -15,
		marginVertical: 10,
	},
	introImages: {
		width: '70%',
		height: '70%',
		alignSelf: 'center',
		resizeMode: 'contain',
	},
});

export default styles;
