import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";

export const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});
