import firebase from '@firebase/app';
import "firebase/firestore";
import {useHistory} from 'react-router-dom';
require('firebase/auth');


const firebaseConfig = {
  apiKey: "AIzaSyC89CQnGrKpIksjP0rMOWH_5OEWyI7IRyI",
  authDomain: "helper-a77d7.firebaseapp.com",
  projectId: "helper-a77d7",
  storageBucket: "helper-a77d7.appspot.com",
  messagingSenderId: "598862356393",
  appId: "1:598862356393:web:00729055c267d63caeaeb8",
  measurementId: "G-91VF5XNN6F"
};

firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const db=firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

const registerWithEmailAndPassword = async (email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export {auth,registerWithEmailAndPassword,signInWithEmailAndPassword,db,googleProvider,firebase};

