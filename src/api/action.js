import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (categoryId, { rejectWithValue }) => {
    try {
      const url = categoryId
        ? `${BASE_URL}/products?categoryId=${categoryId}` // Фильтрация по категории
        : `${BASE_URL}/products`; // Все товары

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
