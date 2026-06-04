import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  CartItem,
  CartState,
} from "../../typescript/interface/cart.interface";
import { toast } from "sonner";

const initialState: CartState = {
  isLoading: false,
  isError: null,
  cart: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find(
        (item) => item.name === action.payload.name,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        toast.success("Item quantity increased");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success("Product added to cart successfully");
      }
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(
        (product) => product.name === action.payload,
      );
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(
        (product) => product.name === action.payload,
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
      toast.success("Item removed from cart");
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
