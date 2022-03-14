import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBx2OQu848OcDQshK0IoEIngL3FU1XB6rE",
  authDomain: "marzo-de79a.firebaseapp.com",
  projectId: "marzo-de79a",
  storageBucket: "marzo-de79a.appspot.com",
  messagingSenderId: "18649707108",
  appId: "1:18649707108:web:c8e127e945355405a52571"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    facebook,
    db
}