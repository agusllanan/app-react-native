import firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyB2Uc1RtVWJckCTZIemGu5xLFndT6tyoh4",
  authDomain: "react-native-01-ff806.firebaseapp.com",
  projectId: "react-native-01-ff806",
  storageBucket: "react-native-01-ff806.appspot.com",
  messagingSenderId: "751912761656",
  appId: "1:751912761656:web:26575d07ce515ffe66e9cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore ()

export default {
  firebase,
  db
}
