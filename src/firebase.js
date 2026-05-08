import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  // apiKey～appId
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
