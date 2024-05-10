// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHBoFC_20hUSjVN7YTtUFaanURQmHp5z4",
  authDomain: "namaste-netflix-bala.firebaseapp.com",
  projectId: "namaste-netflix-bala",
  storageBucket: "namaste-netflix-bala.appspot.com",
  messagingSenderId: "1083359488717",
  appId: "1:1083359488717:web:7edff833054a12ae6ed784",
  measurementId: "G-4WNGYF15XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);