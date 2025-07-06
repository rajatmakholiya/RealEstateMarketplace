// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-59a31.firebaseapp.com",
  projectId: "real-estate-59a31",
  storageBucket: "real-estate-59a31.firebasestorage.app",
  messagingSenderId: "613370942165",
  appId: "1:613370942165:web:e03fdbe6eee9669ba9885c",
  measurementId: "G-HJ8KKYECSZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);