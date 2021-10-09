import { configureStore } from "@reduxjs/toolkit";
import Cart from "./features/Cart";

export default configureStore({
  reducer: {
    cart: Cart,
  },
});
