import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
