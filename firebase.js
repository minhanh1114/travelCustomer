// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCTXOXn_0oJZQQ21bb3u67URMXObK6RhIs",
    authDomain: "project-travel-17b40.firebaseapp.com",
    projectId: "project-travel-17b40",
    storageBucket: "project-travel-17b40.appspot.com",
    messagingSenderId: "645173092907",
    appId: "1:645173092907:web:4b269b413f6a0e24d5006e",
    measurementId: "G-R5Q7LHCZSN"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };