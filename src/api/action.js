import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ categoryId, page, limit, sortBy }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`, {
        params: {
          categoryId,
          _page: page,
          _per_page: limit,
          _sort: sortBy,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentProduct = createAsyncThunk(
  "products/getCurrentProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
