import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	scrollView: {
		width: '100%',
	},
	safeArea: {
		height: '100%',
		width: '100%',
		paddingHorizontal: 40,
	},
	// Text styles
	h1: {
		fontSize: 30,
		fontWeight: '700',
		fontFamily: 'monospace',
		textAlign: 'center',
	},
	h2: {
		fontSize: 25,
		fontWeight: '500',
		fontFamily: 'monospace',
		textAlign: 'center',
	},
	h3: {
		fontSize: 20,
		fontWeight: '500',
		fontFamily: 'monospace',
		textAlign: 'center',
	},
	p: {
		marginVertical: 10,
		fontSize: 15,
		fontWeight: '500',
		fontFamily: 'monospace',
		textAlign: 'center',
	},
});

export default styles;
