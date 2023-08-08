// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, browserLocalPersistence, setPersistence, browserSessionPersistence } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCmWP991M7sQ5n-wt8oW9CSEKIa2ChuEM4",
  authDomain: "learndemy-2d86f.firebaseapp.com",
  projectId: "learndemy-2d86f",
  storageBucket: "learndemy-2d86f.appspot.com",
  messagingSenderId: "683331846163",
  appId: "1:683331846163:web:b1cf4122d0c37533d13fe6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const persistence = async () => {
  await setPersistence(auth, browserLocalPersistence)
}
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    console.log("persistence set")
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  

export default app;
