import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk("fetch-all-products", async (reqURL) => {
  const response = await fetch(reqURL);
  return response.json();
});

export const productSlice = createSlice({
  name: "product",
  initialState: { data: [], status: "UNKNOWN" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "SUCCESS";
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.data = []
      state.status = `FAIL: ${action.error.message}`;
    });
    builder.addCase(fetchAllProducts.pending, (state, action) => {
      state.status = "PENDING";
    });
  }
});
