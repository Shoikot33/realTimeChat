import React, { Component, useDebugValue } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
import { Logo, H2, InputText, Phone, ButtonLarge, H5, ColorSettings, ModalLoading, APIErrorModal, NoInternet } from "../../components"
import firebaseSetup from "./setup";
import AnalyticsFirebase from '../../components/Analytics/analyticsFirebase';
import NetInfo from "@react-native-community/netinfo";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const { auth,firestore } = firebaseSetup();

GoogleSignin.configure({
    webClientId: '8382336119-r39agun82720btckc54bfm4ef9s8v0rj.apps.googleusercontent.com',
});
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: "",
            inputButtonReady: true,
            isFocused: true,
            confirm: null,
            loadingModalVisibility: false,
            APIErrorModalVisibility: false,
            noInternetModalVisibility: false
        };
    }



    logOutFirebase = () => {
        auth().signOut();
    }

    onFacebookButtonPress = async () => {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    storeUserInfo = (userData) => {
        let mainUserData = userData.additionalUserInfo.profile;
        let uid = userData.user._user.uid;
        
        this.getFireStoreData(mainUserData,uid);
        console.log(mainUserData, uid);
    }

    getFireStoreData = async (userData,uid) => {
        let user={
            picture:userData.picture,
            uid: uid,
            name:userData.given_name+" "+userData.family_name,
        }
        global.globalUser = user;
        firestore().collection('chatUsers').doc(uid).set({
            email: userData.email,
            name: userData.given_name+" "+userData.family_name,
            picture: userData.picture
        }).then (()=>{
            console.log("User Details Added");
            Actions.Home({uid: uid});
        })
        
       
    }

    FacebookSignIn = () => {
        return (
            <View >
                <ButtonLarge
                    buttonTitle="Sign-In With Facebook"
                    onPressButtonLarge={() => this.onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
                />
            </View>
        );
    }
    GoogleSignInView = () => {
        return (
            <View>
                <ButtonLarge
                    buttonTitle="Sign-In With Google"
                    onPressButtonLarge={() => this.onGoogleButtonPress().then((e) => this.storeUserInfo(e))}
                />
            </View>
        );
    }

    onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        let userData = auth().signInWithCredential(googleCredential);
        // Sign-in the user with the credential
        return userData;
    }




    render() {

        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} keyboardVerticalOffset={50}>
                <Animatable.View
                    animation="fadeInDown"
                    iterationCount={1}
                    duration={2000}
                    style={styles.logo}
                >
                    <Logo />
                </Animatable.View>
                {this.GoogleSignInView()}
                <View style={{height:10}} />
                {this.FacebookSignIn()}


            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    logo: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 64
    },
    headLine: {
        alignItems: "flex-start",
        marginLeft: 40
    },
    headLineText: {
        fontWeight: "bold",
        fontFamily: "KohinoorBangla-Regular"
    },
    inputTextContainer: {
        marginTop: 22,
        marginLeft: 30,
    },
    buttonContainer: {
        marginLeft: "auto",
        marginRight: 30,
        marginTop: 30
    }
})
