import { StyleSheet } from "react-native";
import { ColorSettings as Settings } from "../Typography";
import { Dimensions } from "react-native";

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
let modalMaxHeight = (screenHeight * 90) / 100;
let imageViewHeight = (screenHeight * 20) / 100;
let imageWidthOfModalPrimary = (screenHeight * 41) / 100;  
let imageWidthOfModalTruckDetails = (screenHeight * 35) / 100;
let maxHeightOfModal = parseInt((screenHeight * 80) / 100);
let minHeightOfModalDateTime = parseInt((screenHeight * 47.81) / 100);
let topHeight = parseInt((screenHeight * 41.6) / 100);
let modalHeight = screenHeight / 2;
let imageWidth = (screenHeight * 41) / 100;
// let modalHeightWithInput = screenHeight / 3;
let modalHeightWithInput = Math.round(screenHeight * 0.328125);
var modalSubmitImageHeight = Math.round(screenHeight * 0.346);
var modalSubmitImageWidth = Math.round(screenWidth * 0.7222);

var truckDetailsImageHeight = Math.round(screenHeight * 0.3);
var truckDetailsImageWidth = Math.round(screenWidth * 0.71);

var modalBottomSheetContainer = {
    justifyContent: "flex-end",
    margin: 0,
};

var modalBottomSheetBorder = {
    borderTopLeftRadius: Settings.modalBorderRadius,
    borderTopRightRadius: Settings.modalBorderRadius,
};

var modalBottomSheetViewContainer = {
    ...modalBottomSheetBorder,
    backgroundColor: Settings.colorWhite,
    width: "100%",
};

var headlineStyle = {
    color: Settings.colorBlack,
    fontWeight: "bold",
    textAlign: "center",
};

var closeIconView = {
    justifyContent: "center",
    padding: 20,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    marginBottom: 10,
}

export const styles = StyleSheet.create({
    modalBottomSheetContainer: {
        justifyContent: "flex-end",
        margin: 0,
    },
    buttonFixedView: {
        backgroundColor: Settings.colorWhite,
        justifyContent: "center",
        alignItems: "center",
        // elevation: 5,
        paddingTop: 10,
        paddingBottom: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 7,
    },
    topView: {
        ...modalBottomSheetBorder,
        flexDirection: "row",
        backgroundColor: Settings.colorWhite,
        // marginBottom: 10,
        paddingBottom: 10,
        zIndex: 2,
    },
    closeIconView: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 20,
        marginBottom: 8,
        marginTop: 8,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 5,
    },
    topTextView: {
        flex: 9,
        justifyContent: "center",
        paddingLeft: 15,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        marginBottom: 8,
        marginTop: 8,
        marginLeft: 5,
        marginRight: 5,
    },
    headlineStyle: {
        ...headlineStyle,
        textAlign: 'left',
    },
});



export const ModalSubmitStyle = StyleSheet.create({
    container: {
        ...modalBottomSheetContainer,
    },
    modalContainer: {
        ...modalBottomSheetViewContainer,
        minHeight: 200,
        maxHeight: "96%",
    },
    topView: {
        ...modalBottomSheetBorder,
        height: 42,
        flexDirection: "row",
        backgroundColor: Settings.colorWhite,
    },
    topTextView: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 5,
        marginLeft:10
    },
    modalTitleText: {
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center",
    },
    labelTextView: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
    },
    modalLableText1: {
        alignSelf: "center",
        textAlign: "center",
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 10,
        opacity: 0.7,
    },
    modalLableText2: {
        alignSelf: "center",
        textAlign: "center",
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 5,
        paddingBottom: 10,
        opacity: 0.7,
    },
    closeIconView: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 20,
    },
    buttonText: {
        fontSize: 16,
        color: Settings.colorWhite,
        width: 321,
    },
    buttonView: {
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingTop: 40,
        paddingBottom: 21,
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: modalSubmitImageWidth,
        height: modalSubmitImageHeight,
        marginTop: 10,
        marginBottom: 15
    }
});

