import {StyleSheet, Dimensions} from 'react-native';
import {ColorSettings as Settings} from '../';
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var width = Math.round(screenWidth * 0.1444);

var buttonContainer = {
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: Settings.colorThemeLighter,
	paddingLeft: 5,
	paddingRight: 5,
	borderRadius: 4,
};
var buttonText = {
	paddingLeft: 15,
    paddingRight: 15,
};

var buttonStyles = StyleSheet.create({
    buttonView:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
		
    },
    buttonCircleView:{
        backgroundColor:Settings.colorWhite,
        borderRadius:50,
    },
	buttonCircleContainer: {
		...buttonContainer,
		width: width,
        height: width,
        borderRadius: 50,
        padding: 0,
        maxWidth: 65,
        maxHeight: 65,
	},
	buttonExtraLargeContainer: {
		...buttonContainer,
		width: '100%',
        minHeight: 43,
        borderRadius: 0,
	},
	buttonExtraLargeText: {
		...buttonText,
	},
	buttonFlattenContainer: {
		...buttonContainer,
		width: '37%',
		// width: 133,
        height: 38,
        borderRadius: 19,
        borderColor: Settings.colorBorderTheme,
        borderWidth: 1,
	},
	buttonFlattenText: {
		// flex: 1,
		textAlign: 'center',
		color: Settings.colorTheme,
        paddingLeft: 5,
        paddingRight: 5,
	},
	buttonLargeContainer: {
		...buttonContainer,
		width: '89.5%',
        minHeight: 45,
	},
	buttonLargeText: {
		...buttonText,
		lineHeight: 24,
	},
	buttonSmallContainer: {
		...buttonContainer,
		width: "45.25%",
        minHeight: 45,
	},
	buttonSmallText: {
		// flex: 1,
		lineHeight: 24,
		textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
	},
	buttonSocialContainer: {
		...buttonContainer,
		width: "89.5%",
        minHeight: 40,
        paddingLeft: 15,
        paddingRight: 15,
	},
	buttonSocialText: {
		lineHeight: 24,
        textAlign: "center",
        width: "85%",
	},
	buttonSocialFacebook: {
        backgroundColor: Settings.colorBlueDark,
    },
    buttonSocialGoogle: {
        backgroundColor: Settings.colorWhite,
        borderColor: Settings.colorGrayLightest,
        borderWidth: 1,
    },
	buttonPrimary: {
		backgroundColor: Settings.colorPrimary,
		borderColor: 'transparent',
		//borderRadius:50,
	},
	buttonSecondary: {
		backgroundColor: Settings.colorTheme,
		borderColor: 'transparent',
	},
	buttonSecondaryText: {
		color: Settings.colorWhite,
		fontWeight: "bold",
		fontSize:18
	},
	buttonTertiary: {
        backgroundColor: Settings.colorWhite,
        borderColor: Settings.colorBorderGrey,
		borderWidth: 0.7,
		//borderRadius:0
	},
	buttonTertiaryText: {
		color: Settings.colorBlueLighter,
	},
	buttonDisabled: {
    	backgroundColor: Settings.colorDisabled,
    	borderColor: 'transparent',
    },
    buttonDisabledText: {
    	color: Settings.colorWhite,
    },
    buttonTextDark: {
    	color: Settings.colorBlack,
    },
    buttonTextLight: {
    	color: Settings.colorWhite,
    },
});

export {
	buttonStyles
}