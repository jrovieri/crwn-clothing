import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC96PMIy-UEQa94jIotky46yvbpYMcYzrw",
  authDomain: "crwn-db-807f6.firebaseapp.com",
  projectId: "crwn-db-807f6",
  storageBucket: "crwn-db-807f6.appspot.com",
  messagingSenderId: "600438580257",
  appId: "1:600438580257:web:12f9bd3f8a9ec90c212f60"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;