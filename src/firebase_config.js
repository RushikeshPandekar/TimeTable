// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Wluhlo_YBHk48ZxQFaxP1JnR7df-_74",
  authDomain: "realtimetimetable.firebaseapp.com",
  databaseURL:
    "https://realtimetimetable-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtimetimetable",
  storageBucket: "realtimetimetable.appspot.com",
  messagingSenderId: "631065346462",
  appId: "1:631065346462:web:929f71d177e47fe9f8968f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
