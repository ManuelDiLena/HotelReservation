import { createSlice } from '@reduxjs/toolkit';

export const startSlice = createSlice({
  name: 'start',
  initialState: {
    value: new Date(2023, 3, 10).getTime(),
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setStart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStart } = startSlice.actions;

export const selectStart = (state) => state.start.value;

export default startSlice.reducer;
