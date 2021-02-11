
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhnVxfo1glgNaizfprlHaKlCAXVhUkXy8",
    authDomain: "todo-app-dad63.firebaseapp.com",
    projectId: "todo-app-dad63",
    storageBucket: "todo-app-dad63.appspot.com",
    messagingSenderId: "467310294688",
    appId: "1:467310294688:web:f9b1ea2180ff64b49a7bc5",
    measurementId: "G-EYWR0QRNDT"
  });

const db=firebaseApp.firestore();

export default db;