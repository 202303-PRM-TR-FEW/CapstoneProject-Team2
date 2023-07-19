"use client";

import { createSlice } from "@reduxjs/toolkit";
import { addSelectedProfile, fetchUsers } from "../apiUsers"
import { removeUser } from "../apiUsers"

const initialState = {
  users: [],
  status: "idle",
  error: null,
  selectedProfiles: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addSelectedProfile(state, action) {
      state.selectedProfiles.push(action.payload);
    },
    removeUser(state, action) {
      const { id } = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      });

  },
});

export default usersSlice.reducer;
