import React, { Component } from 'react'
import { BackHandler, DeviceEventEmitter } from "react-native";
import { Router, Scene, Actions } from 'react-native-router-flux';
import analytics from '@react-native-firebase/analytics';
import AuthLogin from '../../Views/Login/Login';
import ChatRoom from '../../Views/Home/ChatRoom';

import Home from "../../Views/Home/Home";
import Authentication from '../../Views/Login/Authentication';
var BackPressed;



export default class Route extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    
  


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
                    <Scene
                        key="ChatRoom"
                        component={ChatRoom}
                        hideNavBar={true} />
                </Scene>


            </Router >
        );
    }
}

