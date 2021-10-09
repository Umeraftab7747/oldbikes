import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  value: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuntity: 0,
  subTotal: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
};

export const Cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setdata: (state, action) => {
      const itemindex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemindex >= 0) {
        state.value[itemindex].cartQuntity += 1;
        state.value[itemindex].Price += action.payload.Price;
        state.subTotal += action.payload.Price;

        console.log(state.subTotal);
        toast(
          `🛍️ ${state.value[itemindex].productname} has been Increase in  Quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const temp = { ...action.payload, cartQuntity: 1 };
        state.value.push(temp);
        state.subTotal += action.payload.Price;
        console.log(state.subTotal);
        toast(`🛒 ${action.payload.productname} has been Added to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.value));
      localStorage.setItem("total", JSON.stringify(state.subTotal));
    },
    removeitem: (state, action) => {
      const removeitem = state.value.filter(
        (item) => item.id !== action.payload.id
      );
      state.value = removeitem;
      state.subTotal -= action.payload.Price;
      toast(`❌ ${action.payload.productname} has been removed from cart`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.value));
      localStorage.setItem("total", JSON.stringify(state.subTotal));
    },
    removeall: (state, action) => {
      state.value = [];
      state.subTotal = 0;
      localStorage.removeItem("cartItems");
      localStorage.removeItem("total");
    },
  },
});

export const { setdata, removeitem, removeall } = Cart.actions;

export default Cart.reducer;
