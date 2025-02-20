import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICart, IMenu } from "../type"
type TCartState = {
  cartList: ICart[],
}

const initialState: TCartState = {
  cartList: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    setCartList: (state, action: PayloadAction<ICart[]>) => {
      state.cartList = action.payload;
    },

    addToCart: (state, {payload }: PayloadAction<IMenu>) => {
      const id = payload.id;
      const menu = state.cartList.find(i => i.id === id);
      if (menu) {
        menu.quantity ++;
      } else { 
        state.cartList.push({ ...payload, quantity: 1});
      }
    },

    increaseQty: (state, { payload }: PayloadAction<string>) => {
      const menu = state.cartList.find(i => i.id === payload);
      if (menu) {
        menu.quantity ++;
      }
    },

    decreaseQty: (state, { payload }: PayloadAction<string>) => {
      const menu = state.cartList.find(i => i.id === payload);
      if (menu && menu.quantity > 1) {
        menu.quantity -= 1;
      } else {
        state.cartList = state.cartList.filter(i => i.id !== payload);
      }
    },
  }
});

export const { setCartList, addToCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;