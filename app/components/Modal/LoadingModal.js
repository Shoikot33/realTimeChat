import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Image,
    Platform,
    BackHandler,
    DeviceEventEmitter,
    Keyboard,
    Text
} from "react-native";
import Modal from "react-native-modal";
import { Actions } from "react-native-router-flux";


import { H3Bold, H5, H6, ColorSettings as Settings, TextPrimary, ModalTitleH2, InputTextArea, CloseIcon, LoadingGif, BurgerAnimation } from '../index';
import { ModalSubmitStyle } from "./styles";
import LottieView from 'lottie-react-native';
import { ColorSettings } from '../Typography';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class LoadingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Modal
                isVisible={this.props.modalVisibility}
                animationType={"fade"}
                // transparent={true}
                style={styles.container}
            >
                    <LottieView
                    source={require('../../assets/lottieFile/handLoading.json')}
                    style={{minHeight: 300, minWidth: 250}}
                    autoPlay
                    loop /> 
                    
               
            </Modal>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageStyle: {
        height: "80%",
        justifyContent: "center",
        alignSelf: "center"
    },
})
