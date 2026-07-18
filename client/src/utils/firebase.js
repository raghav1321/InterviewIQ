

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-bfb2d.firebaseapp.com",
  projectId: "interviewiq-bfb2d",
  storageBucket: "interviewiq-bfb2d.firebasestorage.app",
  messagingSenderId: "846970216229",
  appId: "1:846970216229:web:ff5729f8c7c11a523104cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider}