import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyA0myp5pVJbF_C9sDRByNvn36TEZRv2_fE",
  authDomain: "geo-ninja-bae37.firebaseapp.com",
  databaseURL: "https://geo-ninja-bae37.firebaseio.com",
  projectId: "geo-ninja-bae37",
  storageBucket: "geo-ninja-bae37.appspot.com",
  messagingSenderId: "702011060129",
  appId: "1:702011060129:web:81c4f50f0b9ec79f4de5e0"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
