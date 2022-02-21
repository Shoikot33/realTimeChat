import React, { Component, useRef, useEffect } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Actions, StackActions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import { Logo, H2, InputText, Phone, ButtonCirclePrimary, H5, ColorSettings, ArrowLeft, OtpInputs, SendAnalytics,ModalLoading,APIErrorModal,NoInternet } from "../../components";
import firebaseSetup from "./setup";
import Analytics from '../../components/Analytics/analyticsFirebase';
import Functions from '../../components/Services/Functions';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";


const lengthInput = 6;
//let textInputRef = useRef(null);
const { auth } = firebaseSetup();

export default class OTPAuthentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            internalVal: "",
            otp: '',
            confirm: this.props.confirmation,
            loadingModalVisibility: false,
            noInternetModalVisibility: false,
            APIErrorModalVisibility: false,
        };

    }

    getOtp = (otp) => {
        this.setState({ otp: otp });
    }


    onBackPressed = () => {
        Actions.pop();
    }

    onHideOrShowLoadingModal = ()=>{
        this.setState({
            loadingModalVisibility: !this.state.loadingModalVisibility
        })
    }

    sendAnalytics = async (parameter) => {
        Analytics.firebase('OtpPage', parameter);
    }

    confirmCode = async (code) => {
        try {
            // await this.state.confirm.confirm(code);
            let userFirebase = await this.state.confirm.confirm(code);
            if (userFirebase.additionalUserInfo.isNewUser) {
                let param = {
                    isNewUser: true
                };
                this.sendAnalytics(param);

                this.onHideOrShowLoadingModal();
                alert('দুঃখিত! আপনার অ্যাকাউন্ট তৈরি করা হয়নি! দয়া করে এডমিন এর সাথে যোগাযোগ করুন।');
                const user = auth().currentUser;
                user.delete().then((data)=>{
                    console.log("User delected");
                    Actions.Login({ type: 'replace' });
                })
                
                .catch((error)=>{
                    console.warn(error);
                })
            }
            else {
              try {
                let analyticsParam = {
                    isNewUser: false,
                    uid: userFirebase.user._user.uid,
                    phoneNumber: userFirebase.user._user.phoneNumber,
                    details: "Successfully Logged in."
                };
                this.sendAnalytics(analyticsParam);
                let dataParam ={
                    uId: userFirebase.user._user.uid
                }
                Functions.postApi("login",dataParam)
                .then(response => response.json())
                .then(responseJson =>{
                    console.warn(responseJson);
                    this.saveUserInfo(responseJson);
                    global.globalTenant = responseJson.tenant;
                    this.onHideOrShowLoadingModal();
                    Actions.Home({ type: 'replace' });
                    
                })
                .catch(errr =>{
                    this.checkIfNoInternetOrApiError();
                })

                
              } catch (error) {
                this.onHideOrShowLoadingModal();
                  throw error
              }
            }


        } catch (error) {
            this.onHideOrShowLoadingModal();
            console.log('Invalid code.', error);
            switch (error.code) {
                case 'auth/session-expired':
                    console.log(`Time Up!`, error.message);
                    alert('Time Up! ' + error.message);
                    break;
                default:
                    this.checkIfNoInternetOrApiError();
                    break;
            }
        }
    }

    checkIfNoInternetOrApiError = async () => {
        try {
            NetInfo.fetch().then(state => {
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);

                if (state.isConnected) {
                    console.log("API ERROR");
                    this.setState({
                        loadingModalVisibility: false,
                        APIErrorModalVisibility: true
                    })
                }
                else {
                    this.setState({
                        loadingModalVisibility: false,
                        noInternetModalVisibility: true
                    })
                }
            });
        } catch (error) {

        }
    }

    hideModal = () => {
        this.setState({
            noInternetModalVisibility: !this.state.noInternetModalVisibility
        })
    }
    hideApiErrorModal = () => {
        this.setState({
            APIErrorModalVisibility: false
        })
    }

    saveUserInfo=async (response)=>{
        try {
            await AsyncStorage.setItem("phone",response.phoneNumber);
            await AsyncStorage.setItem("tenant",response.tenant);
            await AsyncStorage.setItem("uid",response.uid);
            await AsyncStorage.setItem("userName",response.displayName);
            await AsyncStorage.setItem("checkUserLoggedIn","true");
           
        } catch (error) {
            throw error
        }
    }



    onClickSubmitOtp = () => {
        this.setState({
            loadingModalVisibility: true
        })
        this.confirmCode(this.state.otp);
        //  Actions.replace("Home");
    }

    resendOtp = async () => {

        try {
            const confirmation = await auth().signInWithPhoneNumber("+88" + this.props.mobileNumber);
            let param = {
                phoneNumber: phoneNumber,
                details: "User Clicked reSend OTP Button"
            }
            AnalyticsFirebase.firebase("OtpPage", param);
            this.setState({
                confirm: confirmation
            })
        } catch (error) {

        }
    }

    // useEffect(()=>{
    //     textInputRef.focus()
    // },[])

    render() {
        return (
            <View style={otpStyle.container} >
                {/* Navbar */}
                <TouchableWithoutFeedback onPress={this.onBackPressed}>
                    <View style={otpStyle.Navbar}>
                        <ArrowLeft />
                    </View>
                </TouchableWithoutFeedback>


                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={50} style={otpStyle.logo}>
                    <View>
                        <Logo />
                    </View>
                    <View style={{ marginTop: 75, padding: 20, height: 200 }}>
                        <H2 textTitle={"Enter verification code that was sent to " + this.props.mobileNumber} />
                        <OtpInputs getOtp={(otp) => this.getOtp(otp)} />

                    </View>

                    <TouchableOpacity onPress={() => this.resendOtp()}>
                        <H5 textTitle={"RESEND CODE"} textStyle={{ color: "#029BCB" }} />

                    </TouchableOpacity>

                    <View style={otpStyle.buttonContainer}>
                        <ButtonCirclePrimary
                            disableOpacityChange={this.state.inputButtonReady}
                            disabled={this.state.inputButtonReady}
                            elevation={2}
                            onPressButtonCirclePrimary={() =>
                                this.onClickSubmitOtp()
                            }
                        />
                    </View>

                </KeyboardAvoidingView>

                <ModalLoading   modalVisibility={this.state.loadingModalVisibility}/>
                <NoInternet modalNoInternetVisibility={this.state.noInternetModalVisibility} hideModal={() => this.hideModal()} />
                <APIErrorModal modalVisibility={this.state.APIErrorModalVisibility} hideModal={() => this.hideApiErrorModal()} />
            </View>
        );
    }
}

// https://github.com/bogoslavskiy/react-native-tabs-section-list/blob/master/example/App.tsx
const otpStyle = StyleSheet.create({
    contaienr: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: ColorSettings.colorWhite
    },
    Navbar: {
        marginTop: 30,
        paddingLeft: 23
    },
    logo: {
        justifyContent: "center",
        alignItems: "center",

    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    buttonContainer: {
        marginLeft: "auto",
        marginRight: 30,
        marginTop: 30
    }
})