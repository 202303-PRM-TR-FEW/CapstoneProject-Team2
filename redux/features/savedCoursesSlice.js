import { createSlice } from "@reduxjs/toolkit";
import { savedCourses } from "../../components/SavedCourses";

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
});

export const { addCourse, removeCourse } = savedCoursesSlice.actions;

export default savedCoursesSlice.reducer;