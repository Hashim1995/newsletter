import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  name: "searchValue",
  initialState: {
    value: null,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
