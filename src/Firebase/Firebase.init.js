// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCljFdqvsgziRqP-6I6B6VeIALPZ2qemqU",
  authDomain: "dragon-news-auth-7a35e.firebaseapp.com",
  projectId: "dragon-news-auth-7a35e",
  storageBucket: "dragon-news-auth-7a35e.firebasestorage.app",
  messagingSenderId: "216912847321",
  appId: "1:216912847321:web:23a981dcf1f3e9decf39c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth