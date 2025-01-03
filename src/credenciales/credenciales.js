// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCjbr86KytDzTc3yQ8UDpwQ3HRMIejlZ80",
  authDomain: "albert-s-dev-portfolio-5b2b7.firebaseapp.com",
  projectId: "albert-s-dev-portfolio-5b2b7",
  storageBucket: "albert-s-dev-portfolio-5b2b7.firebasestorage.app",
  messagingSenderId: "555169058075",
  appId: "1:555169058075:web:48bab5d4132e46978fd7be"
};

// Initialize Firebase
export const AppFirebase= initializeApp(firebaseConfig);