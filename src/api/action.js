import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { clearCart } from "store/cartSlice";

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

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);

      const findedUser = data.find(
        (item) =>
          item.email === userData.email && item.password === userData.password
      );
      if (findedUser) {
        throw new Error("Пользователь уже существует");
      }

      const response = await axios.post(`${BASE_URL}/users`, userData);

      localStorage.setItem("user-data", JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue(error || "Ошибка регистрации");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);
      const findedUser = data.find(
        (item) =>
          item.email === userData.email && item.password === userData.password
      );

      if (!findedUser) {
        throw new Error("Пользователь не найден");
      }

      localStorage.setItem("user-data", JSON.stringify(findedUser));

      return findedUser;
    } catch (error) {
      return rejectWithValue(error || "Ошибка входа");
    }
  }
);

export const submitOrder = createAsyncThunk(
  "order/submitOrder",
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      const state = getState();
      const { cartItems, totalAmount } = state.cart;
      const user = state.auth.user;

      if (user === null) {
        return rejectWithValue("Пользователь не авторизован");
      }

      if (cartItems.length === 0) {
        return rejectWithValue("Корзина пуста");
      }

      const order = {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
        },
        items: cartItems,
        totalAmount,
        createdAt: new Date().toISOString(),
      };

      const { data } = await axios.post(`${BASE_URL}/orders`, order);

      dispatch(clearCart());

      return data;
    } catch (error) {
      return rejectWithValue(error || "Ошибка при создании заказа");
    }
  }
);
