import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/client/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    cart: cartReducer,
  },
});

export default store;
