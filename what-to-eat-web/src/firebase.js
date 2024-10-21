"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyLnwiQpwMUqiGbSJbjQ6fOURTzDaVvmc",
    authDomain: "what-to-eat-web.firebaseapp.com",
    projectId: "what-to-eat-web",
    storageBucket: "what-to-eat-web.appspot.com",
    messagingSenderId: "672036646870",
    appId: "1:672036646870:web:7cce865189d0db8da6be77",
    measurementId: "G-R9N9EL9CF3"
};
// Initialize Firebase
exports.app = (0, app_1.initializeApp)(firebaseConfig);
//const analytics = getAnalytics(app);
