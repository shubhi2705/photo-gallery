// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKqZz0vRFOiFIS1qNoPaBhBvje_xAQfmA",
  authDomain: "ninja-firegram-1a84f.firebaseapp.com",
  projectId: "ninja-firegram-1a84f",
  storageBucket: "ninja-firegram-1a84f.appspot.com",
  messagingSenderId: "430091454439",
  appId: "1:430091454439:web:d6e9ff068e496afc2a1f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {projectFirestore,projectStorage,timestamp};