// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO59p3vAb0vIEOXQ9X1kvOVvB0H9Qo8do",
  authDomain: "react-filebase-9e300.firebaseapp.com",
  projectId: "react-filebase-9e300",
  storageBucket: "react-filebase-9e300.appspot.com",
  messagingSenderId: "328681027634",
  appId: "1:328681027634:web:6366199b4a2b8af73ea42b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 