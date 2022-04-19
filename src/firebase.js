import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-1a1f7.firebaseapp.com",
  projectId: "tutorial-1a1f7",
  storageBucket: "tutorial-1a1f7.appspot.com",
  messagingSenderId: "821575919552",
  appId: "1:821575919552:web:b1b2b39cf4e0eba6924a25"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth= getAuth();
export const storage = getStorage(app);