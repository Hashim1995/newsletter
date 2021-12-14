import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import searchSlice from "./searchSlice";
export default configureStore({
  reducer: {
    data: dataSlice,
    searchValue: searchSlice,
  },
});
