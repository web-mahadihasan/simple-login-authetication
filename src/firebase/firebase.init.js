// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRofvnB_dTrocmamrKZfwBlThcgDmCk18",
  authDomain: "simple-signup-23217.firebaseapp.com",
  projectId: "simple-signup-23217",
  storageBucket: "simple-signup-23217.firebasestorage.app",
  messagingSenderId: "275184068630",
  appId: "1:275184068630:web:9980ae8ebd5ca3a3e86d37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;