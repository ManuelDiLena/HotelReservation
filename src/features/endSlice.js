import { createSlice } from '@reduxjs/toolkit';

export const endSlice = createSlice({
  name: 'end',
  initialState: {
    value: new Date(2023, 3, 10).getTime(),
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setEnd: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEnd } = endSlice.actions;

export const selectEnd = (state) => state.end.value;

export default endSlice.reducer;