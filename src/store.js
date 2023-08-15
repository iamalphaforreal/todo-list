import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/appSlices";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});
