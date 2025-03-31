import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : { cartItems: [], totalAmount: 0 };
};

const saveToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const {
        id,
        title,
        discountPrice = null,
        price,
        storage,
        img,
        selectedColor = null,
      } = payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      const finalPrice = discountPrice || price;

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id,
          img,
          storage,
          title,
          price: finalPrice,
          quantity: 1,
          color: selectedColor,
        });
      }

      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      saveToLocalStorage(state);
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      saveToLocalStorage(state);
    },

    updateQuantity: (state, { payload }) => {
      const { id, quantity } = payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1;
      }
      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      saveToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
