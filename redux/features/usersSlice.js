'use client'

import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../apiUsers";

const initialState = {
    users: [],
    status: "idle",
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
            state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.users = action.payload;
            });
        }
    });

export default usersSlice.reducer;