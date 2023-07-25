
import { createSlice } from '@reduxjs/toolkit';

const sortingSlice = createSlice({
  name: 'sorting',
  initialState: true, 
  reducers: {
    toggleSorting: (state) => !state, 
  },
});

export const { toggleSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
