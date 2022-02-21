import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from 'react-native-router-flux';
import {
    View, Text, NativeModules
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import DeviceInfo from "react-native-device-info";



export default class Authentication extends Component {
    constructor(props) {
        super(props);
        global.globalUser = null;




        this.state = {
        };
    }

    componentDidMount() {
        this.decideRouting();
        this.timeoutHandle = setTimeout(() => {
            SplashScreen.hide();
        }, 1200);

    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle)
    }


    async decideRouting() {
        let checkUserLoggedIn = await AsyncStorage.getItem("checkUserLoggedIn");

        if (checkUserLoggedIn === "true") {
            Actions.Home({ type: 'replace' });
            // Actions.GeoFencing({type: 'replace'});
        } else {
            Actions.Login({ type: 'replace' });
        }
    }


    render() {
        return (
            <View />
        );
    }
}
