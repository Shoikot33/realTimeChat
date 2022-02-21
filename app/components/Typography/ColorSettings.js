import {Dimensions, PixelRatio} from 'react-native';

let screenWidth = parseInt(Dimensions.get('window').width);

let modalBorderRadius = parseInt(screenWidth * 0.045);


var ColorSettings = {
    colorPrimary: '#FD9A26',
    colorTheme: "#F8786F",
    colorWhite: "#FFFFFF",
    colorBlack: "#000000",
    colorGreen: "#27AE60",
    colorGreenDark: "#0F9D58",
    colorGreenLight: "#E9F7EF",
    colorRed: "#FF0000",
    colorThemeLighter: '#f7e5e5',
    colorGrayLighter: '#D8D8D8',
    colorDisabled: '#D6D6D6',
    colorWhite: '#FFFFFF',
    colorBorderGrey: '#CCCCCC',
    colorBorderTheme: 'rgba(194, 0, 0, 0.2)',
    colorBlue: '#4285F4',
    colorBlueLighter: '#4185F3',
    colorGray: '#E9EAEE',
    colorGrayDark: 'gray',
    colorModalBackground: 'rgba(0,0,0,0.7)',
    colorTextInputSuccessBg: '#ECF3FE',
    colorBlackLight: "#232323",
    colorBlackLighter: "#272727",
    colorBlackWithOpacity50: 'rgba(0, 0, 0, 0.5)',
    colorBlackWithOpacity5: 'rgba(0, 0, 0, 0.05)',
    colorBlackWithOpacity10: 'rgba(0, 0, 0, 0.1)',
    colorBlackWithOpacity38: 'rgba(0, 0, 0, 0.38)',
    colorBlackLightOpacity70: 'rgba(35, 35, 35, 0.70)',
    colorThemeOpacity10: 'rgba(176,0,0,0.1)',
    colorBackground: '#FAFAFA',
    colorBlueDark: '#1976D2',
    colorGrayLightest: '#E5E5E5',
    colorGrayLightestBadge: '#E5E6E8',
    colorError: "#FF3F34",
    colorGreenWithOpacity10: "rgba(39,174,96,0.1)",
    modalBackdropOpacity: 0.38,
    bottomNavColor: 'rgba(255,0,0,0.3)',
    colorUnderlay: "#dddddd",
    colorTruckListBorderColor: '#C20000',
    colorInactiveCheckBox: '#868181',
    colorVerticalLine: "#979797",
    colorSwipeBarBg: '#979797',
    colorWhiteWithOpacity87: 'rgba(255, 255, 255, 0.87)',
    colorBlackWithOpacity87: 'rgba(0, 0, 0, 0.87)',
    colorBgLoadingViewTab: '#F3F3F3',
    colorBorder: "#EDEDED",
    colorBorderInvoice: '#DFDFDF',
    colorTabShadow: '#DEE2E5',
    colorFAQListBorder: 'rgba(136,153,166,0.5)',
    colorGrayText: '#999999',
    modalBorderRadius: modalBorderRadius,
}

export {
    ColorSettings
}

