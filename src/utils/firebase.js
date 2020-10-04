import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBko1J94yaZd4NCgINjwpZJrhg_ze_7TWA",
  authDomain: "rancholaspalmas-795a2.firebaseapp.com",
  databaseURL: "https://rancholaspalmas-795a2.firebaseio.com",
  projectId: "rancholaspalmas-795a2",
  storageBucket: "rancholaspalmas-795a2.appspot.com",
  messagingSenderId: "1090835736241",
  appId: "1:1090835736241:web:2c1cae91fbd79f5367a490",
  measurementId: "G-M2NZWCH2G0"
}

export default firebase.initializeApp(firebaseConfig);