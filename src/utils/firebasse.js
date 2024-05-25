import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCHBoFC_20hUSjVN7YTtUFaanURQmHp5z4",
    authDomain: "namaste-netflix-bala.firebaseapp.com",
    projectId: "namaste-netflix-bala",
    storageBucket: "namaste-netflix-bala.appspot.com",
    messagingSenderId: "1083359488717",
    appId: "1:1083359488717:web:7edff833054a12ae6ed784",
    measurementId: "G-4WNGYF15XV",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  export const auth = getAuth();