'use client';


import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../app/lib/firebase";
import { getDocs, collection } from "firebase/firestore";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await getDocs(collection(db, "courses"));
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  }
);  


