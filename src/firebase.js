// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* utama */
  apiKey: "AIzaSyD_NgjjZV0hlp9BpImjlhOwF2ird6xmSXc",
  authDomain: "web-kelas-pgri.firebaseapp.com",
  projectId: "web-kelas-pgri",
  storageBucket: "web-kelas-pgri.appspot.com",
  messagingSenderId: "97254983493",
  appId: "1:97254983493:web:08a5a1d255223e4357e02c",
  measurementId: "G-6ZYZNGVHCF"
/* sec */
/* apiKey: "AIzaSyD_NgjjZV0hlp9BpImjlhOwF2ird6xmSXc",
  authDomain: "web-kelas-pgri.firebaseapp.com",
  projectId: "web-kelas-pgri",
  storageBucket: "web-kelas-pgri.appspot.com",
  messagingSenderId: "97254983493",
  appId: "1:97254983493:web:08a5a1d255223e4357e02c",
  measurementId: "G-6ZYZNGVHCF"*/
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();