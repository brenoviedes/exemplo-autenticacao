// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6OKRUsad20IuLC9wFlCcH3AD7C5-WmSI",
  authDomain: "exemplo-autenticacao-22014.firebaseapp.com",
  projectId: "exemplo-autenticacao-22014",
  storageBucket: "exemplo-autenticacao-22014.appspot.com",
  messagingSenderId: "646625184294",
  appId: "1:646625184294:web:8f11f050835ed78380f4e7"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);