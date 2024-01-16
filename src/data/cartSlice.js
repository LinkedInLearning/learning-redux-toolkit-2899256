import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProductIds: []
  },
  reducers: {
    addItem: (state, action) => {
      state.cartProductIds = [...state.cartProductIds, action.payload];
    },
    delItem: (state, action) => {
      const indexOfElemToRemove = state.cartProductIds.indexOf(action.payload);
      console.log(indexOfElemToRemove);
      if (indexOfElemToRemove !== -1)
        state.cartProductIds.splice(indexOfElemToRemove, 1);
    },
    clearAllItems: (state) => {
      state.cartProductIds = [];
    }
  }
});

export default cartSlice;