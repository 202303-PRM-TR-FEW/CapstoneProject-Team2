import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./features/coursesSlice";
import usersReducer from "./features/usersSlice";
import sortingReducer from "./features/sortingSlice";



export const store = configureStore({



    reducer: {
      courses: coursesReducer,
      users : usersReducer,
      sorting: sortingReducer,

    },


  });
  
