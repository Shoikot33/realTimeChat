/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import Login from "./app/Views/Login/Login";
import {name as appName} from './app.json';
import Setup from "./app/Views/Login/setup";

AppRegistry.registerComponent(appName, () => App);
