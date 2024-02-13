
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDEypDpaiaBmvtyeKpnC5pUj3Ra3fnlwbg",
  authDomain: "newds-f6be2.firebaseapp.com",
  projectId: "newds-f6be2",
  storageBucket: "newds-f6be2.appspot.com",
  messagingSenderId: "907883916164",
  appId: "1:907883916164:web:ae0115fb81e69be11e0bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database =getFirestore(app)
