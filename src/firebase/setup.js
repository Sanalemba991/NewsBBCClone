// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCReSD4gXRsxUtuSEVKxM6hJ5Gp8_ZHCZw",
  authDomain: "analysis-website-fd58c.firebaseapp.com",
  databaseURL: "https://analysis-website-fd58c-default-rtdb.firebaseio.com",
  projectId: "analysis-website-fd58c",
  storageBucket: "analysis-website-fd58c.appspot.com",
  messagingSenderId: "545028579016",
  appId: "1:545028579016:web:98e8b98e30f30c9cef0ffd",
  measurementId: "G-8PNQWJ3FC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database =getFirestore(app)
