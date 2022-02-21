import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from "./components/Routing/Route";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  onChangeInput = (data) => {
    // console.warn(data);
  }

  render() {
    return (
      <Routes />
    
    );
  }
}
