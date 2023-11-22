import { combineReducers } from "redux";
import tokenReducer from "../reducers/token";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  token: tokenReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
