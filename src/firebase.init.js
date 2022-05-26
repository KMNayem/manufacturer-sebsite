// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfhCdwx-kICT0I0mOcpnRFp_IR68RyZjg",
  authDomain: "pro-paint.firebaseapp.com",
  projectId: "pro-paint",
  storageBucket: "pro-paint.appspot.com",
  messagingSenderId: "969896259548",
  appId: "1:969896259548:web:8d489c999ba6aced5da919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

