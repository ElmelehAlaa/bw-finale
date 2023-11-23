import { combineReducers } from "redux";
import fattureReducer from "../reducers/fattureReducer";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import tokenReducer from "../reducers/token";
import clientiReducer from "../reducers/clientiReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  clienti: clientiReducer,
  token: tokenReducer,
  fatture: fattureReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
