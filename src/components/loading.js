import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';

function loading(props) {
	const {visible} = props;

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text style={{fontSize: 30, fontWeight: '700'}}>WKLY</Text>
			{/* <Bubbles size={15} color='black' /> */}
			<Bars
				visible
				style={{justifyContent: 'center', alignItems: 'center'}}
				size={20}
				color='black'
			/>
			{/* <Pulse size={20} color='#52AB42' />
			<DoubleBounce size={20} color='#1CAFF6' /> */}
		</View>
	);
}

export default loading;
