import React from 'react';
//import { getUniqueId, getManufacturer } from 'react-native-device-info';
import firebaseSetup from "../../Views/Login/setup";

const { analytics } = firebaseSetup();
const Analytics = {
    async firebase (pageName, parameter) {
       try {
        await analytics().logEvent(pageName, parameter);
       } catch (error) {
           console.warn("Error: ",error)
       }
    }
}

export default Analytics


