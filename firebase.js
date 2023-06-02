// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzY3n4K6N2_cBIM1rv9hVbb7t_zMwkTu8",
    authDomain: "xrlab-31918.firebaseapp.com",
    projectId: "xrlab-31918",
    storageBucket: "xrlab-31918.appspot.com",
    messagingSenderId: "24677014483",
    appId: "1:24677014483:web:4ed8495c10d8985a36ad26",
    measurementId: "G-JQ5654QJ1X"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// export const db = firebase.firestore();
// const analytics = getAnalytics(app);
export default firebaseApp;

