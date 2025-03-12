// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5GKBuFq9nQq1GpW8n3wvJqpOhKmkK8HA",
  authDomain: "netflixgpt-9fded.firebaseapp.com",
  projectId: "netflixgpt-9fded",
  storageBucket: "netflixgpt-9fded.firebasestorage.app",
  messagingSenderId: "839178092314",
  appId: "1:839178092314:web:77a4f487a0afa1a605b6a3",
  measurementId: "G-SQWNJPTEC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
