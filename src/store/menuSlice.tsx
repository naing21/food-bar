import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../type"


type TMenuState = {
  menuList: IMenu[],
  filterList: IMenu[],
  menuDetail: IMenu | null,
  isFetchingMenu: boolean,
}

const initialState: TMenuState = {
  menuList: [],
  filterList:[],
  menuDetail: null,
  isFetchingMenu: false,
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuList: (state, action: PayloadAction<IMenu[]>) => {
      state.menuList = action.payload;
    },

    setFilterList: (state, action: PayloadAction<IMenu[]>) => {
      state.filterList = action.payload;
    },
    setMenuDetail: (state, action: PayloadAction<IMenu>) => {
      state.menuDetail = action.payload;
    },
    setIsFecthingMenu: (state, action: PayloadAction<boolean>) => {
      state.isFetchingMenu = action.payload;
    },
  }
});

export const { setFilterList, setMenuDetail, setMenuList, setIsFecthingMenu } = menuSlice.actions;
export default menuSlice.reducer;
