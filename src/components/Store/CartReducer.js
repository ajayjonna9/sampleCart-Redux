import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartValues: [],
  cartTotal: 0,
  isCartOpen: false,
  cartAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("pay", action.payload);
      state.cartAmount += action.payload.price;

      const existingEle = state.cartValues.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingEle >= 0) {
        let ele = state.cartValues[existingEle];
        ele.quantity += 1;

        console.log("hi", ele);

        // state.cartValues[existingEle] = newele;
      } else {
        state.cartValues.push(action.payload);
        console.log("hiiii", state.cartValues);
      }
      state.cartTotal += 1;
    },
    removeFromCart: (state, action) => {
      const existingEle = state.cartValues.findIndex(
        (item) => item.id === action.payload
      );
      let ele = state.cartValues[existingEle];
      state.cartAmount -= ele.price;
      state.cartTotal -= 1;
      if (ele.quantity > 1) {
        ele.quantity -= 1;
      } else {
        state.cartValues = state.cartValues.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    cartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;
export default cartReducer;
export { cartActions };
