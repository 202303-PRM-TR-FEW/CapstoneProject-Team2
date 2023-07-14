import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./features/coursesSlice";
import usersReducer from "./features/usersSlice";

export const store = configureStore({
    reducer: {
      courses: coursesReducer,
      users : usersReducer,
    },

  });
  
