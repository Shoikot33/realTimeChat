import React from 'react';
import { StyleSheet, Text } from 'react-native';

import {ColorSettings as Settings} from './ColorSettings';


var H1 = (props) => {
	
	return(
		<Text 
			allowFontScaling={false}
			style={[textStyles.h1, props.textStyle, ]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}

var H2 = (props) => {
	
	return(
		<Text 
			allowFontScaling={false}
			style={[textStyles.h2, props.textStyle, ]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}



var H3 = (props) => {
	
	return(
		<Text 
			allowFontScaling={false}
			style={[textStyles.h3, props.textStyle, ]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}

var H3Bold = (props) => {
	
	return(
		<Text 
			allowFontScaling={false}
			style={[textStyles.h3Bold, props.textStyle ]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}

var H4 = (props) => {
	
	return(
		<Text 
			allowFontScaling={false}
			style={[textStyles.h4, props.textStyle, ]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}
var H5 = (props) => {
	
	return(
		<Text 
			allowFontScaling={false}
			style={[textStyles.h5, props.textStyle, ]} 
			numberOfLines={props.numberOfLines}>
			{props.textTitle}
		</Text>
	);
}




const text = {
	
	fontFamily: "NotoSerifJP-Medium",
	color: Settings.colorBlack,
	includeFontPadding: false,
	textAlignVertical: 'center',
};

const boldText={
	fontFamily: "NotoSerifJP-Bold",
	color: Settings.colorBlack,
	includeFontPadding: false,
	textAlignVertical: 'center',
}

var textStyles = StyleSheet.create({
	
    h1: {
    	...text,
        fontSize: 24,
        lineHeight: 28,
    },
    h2: {
    	...text,
        fontSize: 19,
        lineHeight: 30,
    },
    modalTitleH2: {
    	...text,
        fontSize: 18,
        lineHeight: 34,
    },
	h3: {
    	...text,
        fontSize: 16,
        lineHeight: 29,
    },
	h3Bold: {
    	...boldText,
        fontSize: 14,
        lineHeight: 29,
    },
    h4: {
    	...text,
        fontSize: 13,
        lineHeight: 29,
    },
    h5: {
    	...text,
        fontSize: 12,
        lineHeight: 24,
    },
    
});

export {
	H1, H2,H3, H4,H5,H3Bold
};