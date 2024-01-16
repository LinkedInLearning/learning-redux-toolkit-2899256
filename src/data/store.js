import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { productSlice } from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer
  }
});

export default store;