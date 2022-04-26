import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgiEA7LxLhVRXjB4nzZvW5YibMHeATPCA",
    authDomain: "slack-build-2595b.firebaseapp.com",
    projectId: "slack-build-2595b",
    storageBucket: "slack-build-2595b.appspot.com",
    messagingSenderId: "1084439311187",
    appId: "1:1084439311187:web:944d6a76bbc529b4af67a6",
    measurementId: "G-CC2643957T"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };