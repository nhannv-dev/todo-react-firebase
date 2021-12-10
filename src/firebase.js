import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5uldCFzZQ8sMlTsVuR4cazfGtlJwgGCg",
  authDomain: "todo-react-firebase-b40dd.firebaseapp.com",
  projectId: "todo-react-firebase-b40dd",
  storageBucket: "todo-react-firebase-b40dd.appspot.com",
  messagingSenderId: "1076746428616",
  appId: "1:1076746428616:web:e393155a2170dd11c8c5fd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
