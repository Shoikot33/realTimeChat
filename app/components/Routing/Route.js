import React, { Component } from 'react'
import { BackHandler, DeviceEventEmitter } from "react-native";
import { Router, Scene, Actions } from 'react-native-router-flux';
import analytics from '@react-native-firebase/analytics';
import AuthLogin from '../../Views/Login/MobileLogin';

import Home from "../../Views/Home/Home";
import Authentication from '../../Views/Login/Authentication';
var BackPressed;



export default class Route extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

        // BackPressed = DeviceEventEmitter.addListener('hardwareBackPress', function (event) {
        //     this.handleBackButtonClick()
        // }.bind(this));
    }

    sendAnalytics = async () => {
        let previousRouteName = Actions.currentScene;
        let currentRouteName = Actions.prevScene;

        console.log("Prev:"+previousRouteName+" Current:"+currentRouteName);
        if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
                screen_name: currentRouteName,
                screen_class: currentRouteName,
            });
        }
    }

    componentWillUnmount() {
        if (typeof BackPressed !== "undifined") {
            BackPressed.remove();
        }
    }

    // handleBackButtonClick() {

    //     if (Actions.currentScene == "Login" || Actions.prevScene == "Home") {
    //         if (Actions.prevScene == "OtpAuth" && Actions.currentScene == "Login") {
    //             this.sendAnalytics();
    //             Actions.pop();
    //         }
    //         else {
    //             this.sendAnalytics();
    //             BackHandler.exitApp();
    //         }
    //     }
    //     else if (Actions.currentScene == "Home" && Actions.prevScene == "OrderCompleted") {
    //         this.sendAnalytics();
    //         BackHandler.exitApp();
    //     }
    //     else if (Actions.prevScene == "OrderReview") {
    //         this.sendAnalytics();
    //         Actions.replace('Home');
    //     }
    //     else if (Actions.prevScene == "null") {
    //         this.sendAnalytics();
    //         Actions.replace('Home');
    //     }
    //     else {
    //         this.sendAnalytics();
    //         Actions.pop();
    //     }

    //     return true;
    // }




    render() {
       
        return (
            <Router>
                <Scene key="root" >
                <Scene
                        key="Authentication"
                        component={Authentication}
                        initial={true}
                        hideNavBar={true} />
                    <Scene
                        key="Login"
                        component={AuthLogin}
                        hideNavBar={true} />
                  
                    <Scene
                        key="Home"
                        component={Home}
                        hideNavBar={true} />
                </Scene>


            </Router >
        );
    }
}

