

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Dummy slice to satisfy Redux
const dummySlice = createSlice({
  name: "dummy",
  initialState: {},
  reducers: {},
});

export const store = configureStore({
  reducer: {
    dummy: dummySlice.reducer, // must have at least one reducer
  },
});

export default store;



