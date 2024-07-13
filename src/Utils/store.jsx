import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";

const store = configureStore({
  app: AppSlice,
});

export default store;
