// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmWP991M7sQ5n-wt8oW9CSEKIa2ChuEM4",
  authDomain: "learndemy-2d86f.firebaseapp.com",
  projectId: "learndemy-2d86f",
  storageBucket: "learndemy-2d86f.appspot.com",
  messagingSenderId: "683331846163",
  appId: "1:683331846163:web:b1cf4122d0c37533d13fe6",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
