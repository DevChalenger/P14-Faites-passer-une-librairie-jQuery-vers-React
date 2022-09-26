import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/reducers/theme";
import employeeReducer from "./features/reducers/employee";
import storage from "redux-persist/lib/storage/";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  theme: themeReducer,
  employee: employeeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
