import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSavedCoursesFromFirebase = createAsyncThunk(
  "savedCourses/fetchSavedCoursesFromFirebase",
  async (userId) => {
    const savedCoursesRef = doc(db, "savedCourses", userId);
    const docSnap = await getDoc(savedCoursesRef);
    return docSnap.exists() ? docSnap.data().courses : [];
  }
); 

