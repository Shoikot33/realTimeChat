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


import { H3Bold, H5, H6, ColorSettings as Settings, TextPrimary, ModalTitleH2, NoInternetSVG, CloseIcon, ButtonLargeSecondary, BurgerAnimation } from '../index';
import { ModalSubmitStyle } from "./styles";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class NointernetModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Modal
                isVisible={this.props.modalNoInternetVisibility}
                animationType={"fade"}
                // transparent={true}
                style={styles.container}
            >
                <View style={{ justifyContent: "center", alignContent: "center", backgroundColor: Settings.colorWhite }}>
                    <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                        <NoInternetSVG height={35} width={35} />
                    </View>

                    <H3Bold textTitle={"ইন্টারনেট সংযোগ নেই।"} textStyle={{ color: Settings.colorBlack, textAlign: "center", marginBottom: 10 }} />
                    <H5 textTitle={"Please Check Your internet Connection"} textStyle={{ color: Settings.colorBlack, textAlign: "center", marginBottom: 30 }} />

                    <View style={{ height: 61, justifyContent: "center", alignItems: "center",marginBottom:20 }}>
                        <ButtonLargeSecondary
                            disableOpacityChange={this.state.inputButtonReady}
                            // disabled={this.state.inputButtonReady}
                            elevation={2}
                            onPressButtonLargeSecondary={this.props.hideModal}
                            buttonTitle={"আবার চেষ্টা করুন"}
                        />
                    </View>
                </View>
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
