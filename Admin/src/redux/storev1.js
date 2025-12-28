import { configureStore } from "@reduxjs/toolkit";


// Admin project may not need Redux, but keeping minimal store for compatibility
export const store = configureStore({
  reducer: {
    // Add admin-specific reducers here if needed
  },
});

export default store;

