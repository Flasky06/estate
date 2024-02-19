// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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
export const storage = getStorage(app);
