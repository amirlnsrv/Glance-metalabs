import { createSlice } from "@reduxjs/toolkit";
import { submitOrder } from "api/action";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    status: "idle",
    error: null,
    lastOrder: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lastOrder = action.payload;
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
