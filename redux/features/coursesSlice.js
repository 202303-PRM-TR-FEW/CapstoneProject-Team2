'use client'

import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../api";

const initialState = {
    courses: [],
    status: "idle",
    error: null,
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCourses.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchCourses.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.courses = action.payload;
        });
    },
  });
  
  export default coursesSlice.reducer;
