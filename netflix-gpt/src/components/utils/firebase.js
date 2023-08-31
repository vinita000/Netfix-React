// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// import { Link } from "react-router-dom";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJle20IivGMViKM3KVMebEKpdHkKyylG0",
  authDomain: "netflixgpt-f388a.firebaseapp.com",
  projectId: "netflixgpt-f388a",
  storageBucket: "netflixgpt-f388a.appspot.com",
  messagingSenderId: "773457212097",
  appId: "1:773457212097:web:c27d1f96a22c8b54b35a40",
  measurementId: "G-Z08VBJFFTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();