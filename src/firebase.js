// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASMOkfGJySWG8Bwj2QsZxQRlryZnlQ-Cs",
  authDomain: "vacafy-f2ab5.firebaseapp.com",
  databaseURL: "https://vacafy-f2ab5.firebaseio.com",
  projectId: "vacafy-f2ab5",
  storageBucket: "vacafy-f2ab5.appspot.com",
  messagingSenderId: "612146791227",
  appId: "1:612146791227:web:d9b29b7ee3220d39156d1e",
  measurementId: "G-W0T82YMJ0W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};