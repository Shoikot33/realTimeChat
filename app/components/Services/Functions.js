import { Platform, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

//import AsyncStorageItem from "../utils/asyncStorageItem";
import DeviceInfo from "react-native-device-info";

var baseurl;
var changebaseurl = "local";

if (changebaseurl === "local") {
    baseurl = "https://bakers.apphousebd.com/api/app/v1/"
}
else {
    baseurl = "https://bakers.apphousebd.com/api/app/v1/"
}


var getDeviceId = function () {
    var deviceId;
    if (typeof globalUserDeviceId !== "undefined" && globalUserDeviceId != null && globalUserDeviceId != "") {
        deviceId = globalUserDeviceId
    }
    else {
        deviceId = ""
    }
    return deviceId
}

var getApiHeadersNode = function () {
    var lat = 0;
    var lng = 0;

    var apiHeaders = new Headers({
        //  'Authorization': "Bearer " + jwt,
        'Content-Type': 'application/json',
        'lat': lat,
        'lng': lng,
        'deviceId': getDeviceId()
    });
    return apiHeaders;
};




const Functions = {

    checkPromiseStatus(temp) {

        if (temp.status == "455") {
            console.warn("Logout Hobe")
        } else if (temp.status == "403" || temp.status == "401") {
            //  this.ExpiredJwtGetNewJwt();
            console.warn("Get a New JWT",temp);
        } else return temp;
    },

    async postApi(extraUrl, jsonParameter) {
        let url = baseurl + extraUrl;

        let temp = await Promise.race([fetch(url, {
            method: "POST",
            body: JSON.stringify(jsonParameter),
           // headers: getApiHeadersNode()
        }),

        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), 60000)
        )
        ])
        let responseStatus = this.checkPromiseStatus(temp);
        return responseStatus;
    },
    async getApi(extraUrl,) {
        let url = baseurl + extraUrl;

        let temp = await Promise.race([fetch(url, {
            method: "GET",
            headers: getApiHeadersNode()
        }),

        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), 60000)
        )
        ])
        let responseStatus = this.checkPromiseStatus(temp);
        return responseStatus;
    }

}

export default Functions;