import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideToggle: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, hideToggle } = AppSlice.actions;
export default AppSlice.reducer;
