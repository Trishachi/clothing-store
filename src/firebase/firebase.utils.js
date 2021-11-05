import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDxsSWnjkrhIAQsa5Qa_GpdQm9HiqLgbcE",
  authDomain: "crwn-db-5b39b.firebaseapp.com",
  projectId: "crwn-db-5b39b",
  storageBucket: "crwn-db-5b39b.appspot.com",
  messagingSenderId: "1093997910538",
  appId: "1:1093997910538:web:54930ab15fdf5b089a5df3",
  measurementId: "G-B95BCTYS9Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
