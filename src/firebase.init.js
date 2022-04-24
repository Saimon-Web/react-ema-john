// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARKfeWU3wH47UTmH5g9vPRN2VmgX3N4H4",
    authDomain: "react-ema-john-92112.firebaseapp.com",
    projectId: "react-ema-john-92112",
    storageBucket: "react-ema-john-92112.appspot.com",
    messagingSenderId: "910424450424",
    appId: "1:910424450424:web:6183c27bdc62889568148d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;