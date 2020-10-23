import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBEjHiYfRtksj_WY6QRtSvH4vIuzGPspGk",
  authDomain: "jumpstart-272417.firebaseapp.com",
  databaseURL: "https://jumpstart-272417.firebaseio.com",
  projectId: "jumpstart-272417",
  storageBucket: "jumpstart-272417.appspot.com",
  messagingSenderId: "32720485121",
  appId: "1:32720485121:web:40052bc517a0c6f8a57900",
  measurementId: "G-42WSWL8WRP",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
