// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.api_Key,
  authDomain: "learndemy-2d86f.firebaseapp.com",
  projectId: "learndemy-2d86f",
  storageBucket: "learndemy-2d86f.appspot.com",
  messagingSenderId: "683331846163",
  appId: "1:683331846163:web:b1cf4122d0c37533d13fe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);