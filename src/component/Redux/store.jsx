import { configureStore } from "@reduxjs/toolkit";

import projectSlice from "./Slice";
export const store = configureStore({
  reducer: {
    todo: projectSlice,
  },
});

export default store;
