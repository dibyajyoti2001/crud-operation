"use client";

import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
