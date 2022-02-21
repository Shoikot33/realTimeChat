import * as React from "react";
import firebase from "@react-native-firebase/app";
import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig={
    apiKey: "AIzaSyAOtFvJ9YbGaQACAB0ZC4Avh3kPi9SfLGg",
    authDomain: "bakers-apphousebd.firebaseapp.com",
    databaseURL: "https://bakers-apphousebd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bakers-apphousebd",
    storageBucket: "bakers-apphousebd.appspot.com",
    messagingSenderId: "8382336119",
    appId: "1:8382336119:web:6fdc78189688cc3bb10a72",
    measurementId: "G-9HH3B5ZMH9"
}

if(!firebase.apps.length){
    //FirebaseApp.DEFAULT_APP_NAME
    console.log("Firebase Init222:",firebase.app.length)
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app();
}

export default ()=>{
   // firebase.initializeApp(firebaseConfig);
    console.log("Firebase Init:",firebase.apps)
    return {firebase,auth,analytics,firestore};
}