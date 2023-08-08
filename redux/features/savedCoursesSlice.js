import { createSlice } from "@reduxjs/toolkit";
import { savedCourses } from "../../components/SavedCourses";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSavedCoursesFromFirebase } from "@/app/lib/fetchSavedCourses";

const initialState = {
  savedCourses: [],
};

export const savedCoursesSlice = createSlice({
  name: "savedCourses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.savedCourses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.savedCourses = state.savedCourses.filter(
        (course) => course.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchSavedCoursesFromFirebase.fulfilled,
      (state, action) => {
        state.savedCourses = action.payload;
      }
    );
  },
});

export const { addCourse, removeCourse  } = savedCoursesSlice.actions; 


export default savedCoursesSlice.reducer;
