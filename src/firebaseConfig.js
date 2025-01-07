// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration (replace with your own Firebase project details)
const firebaseConfig = {
  apiKey: "AIzaSyBdTbi8Ts3zoHsiY4iKtgBZpBvoCc_WFS8",
  authDomain: "travel-8f8e2.firebaseapp.com",
  projectId: "travel-8f8e2",
  storageBucket: "travel-8f8e2.appspot.com", // Fixed storage bucket
  messagingSenderId: "79702185990",
  appId: "1:79702185990:web:0460153835230491f80b87",
  measurementId: "G-S00NDHSVLP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
