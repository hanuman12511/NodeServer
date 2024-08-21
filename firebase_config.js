// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS1T3smvl3yJXbHxNzXE7xFv9GlNdn648",
  authDomain: "leadapp-c39d8.firebaseapp.com",
  projectId: "leadapp-c39d8",
  storageBucket: "leadapp-c39d8.appspot.com",
  messagingSenderId: "834823755671",
  appId: "1:834823755671:web:c6a69fe90221e387dfd6d2",
  measurementId: "G-VG7WP9SNVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);