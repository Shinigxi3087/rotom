// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2WJStgcJ-1iAGbeTo8OhvXF6EYfOi4FE",
  authDomain: "rotom-30c26.firebaseapp.com",
  projectId: "rotom-30c26",
  storageBucket: "rotom-30c26.firebasestorage.app",
  messagingSenderId: "638437056281",
  appId: "1:638437056281:web:b858e64e3fa096d522af88",
  measurementId: "G-8LRR86K17Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);