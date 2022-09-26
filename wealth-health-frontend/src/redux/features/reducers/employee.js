import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "./status";

const initialState = {
  status: "void",
  data: [],
  error: null,
  loading: false,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    ...statusReducer,
  },
});

const { actions, reducer } = employeeSlice;

export const { pending, rejected, resolved } = actions;

export default reducer;
