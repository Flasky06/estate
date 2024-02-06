// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-358ba.firebaseapp.com",
  projectId: "mern-auth-358ba",
  storageBucket: "mern-auth-358ba.appspot.com",
  messagingSenderId: "885716056210",
  appId: "1:885716056210:web:f70f283a4d8331249d4e4b",
  measurementId: "G-B70FWJTB0T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
