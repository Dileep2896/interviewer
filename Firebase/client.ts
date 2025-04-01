// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGQrcM6gwQRED6zBH_yb1gGs_ZvYf_aHA",
  authDomain: "interviewer-972fb.firebaseapp.com",
  projectId: "interviewer-972fb",
  storageBucket: "interviewer-972fb.firebasestorage.app",
  messagingSenderId: "1070205461088",
  appId: "1:1070205461088:web:767ce9484f7134a6275905",
  measurementId: "G-CF4B5T7SX7",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
