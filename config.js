import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDB13wxxPb3FEt_BaprLbdp0fkh1e8rTdw",
  authDomain: "book-santa-app-e5811.firebaseapp.com",
  projectId: "book-santa-app-e5811",
  storageBucket: "book-santa-app-e5811.appspot.com",
  messagingSenderId: "1034134249972",
  appId: "1:1034134249972:web:93b8a2da1492f9efbfd9a1",
  measurementId: "G-71F0XPHDYX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();