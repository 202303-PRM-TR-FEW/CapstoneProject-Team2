
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../app/lib/firebase";
import { getDocs, collection } from "firebase/firestore";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await getDocs(collection(db, "users"));
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched users:", data); 
    return data;
  }

);  



