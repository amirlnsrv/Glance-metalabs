import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "api/action";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUserState: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

export const { setUserState } = authSlice.actions;

export default authSlice.reducer;
