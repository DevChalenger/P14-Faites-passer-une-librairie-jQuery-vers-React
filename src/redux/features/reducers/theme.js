import { createSlice } from "@reduxjs/toolkit";
import { themeActions } from "../actions/theme";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    ...themeActions,
  },
});

const { actions, reducer } = themeSlice;

export const { set, toggle } = actions;

export default reducer;
