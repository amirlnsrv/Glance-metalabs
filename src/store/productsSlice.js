import { createSlice } from "@reduxjs/toolkit";
import { getCurrentProduct, getProducts } from "api/action";
import { categories } from "constants/categories";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    responseForProducts: {},
    categoryId: 1,
    categories,
    loading: false,
    error: null,
    isCurrentProductLoading: false,
    currentProduct: {},
    currentProductError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.responseForProducts = payload;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.message;
      });

    builder
      .addCase(getCurrentProduct.pending, (state) => {
        state.isCurrentProductLoading = true;
      })
      .addCase(getCurrentProduct.fulfilled, (state, { payload }) => {
        state.isCurrentProductLoading = false;
        state.currentProduct = payload;
      })
      .addCase(getCurrentProduct.rejected, (state, { payload }) => {
        state.isCurrentProductLoading = false;
        state.currentProductError = payload.message;
      });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
