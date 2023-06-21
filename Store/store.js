import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import { persistStore, persistReducer } from "redux-persist";
import { withReduxStateSync } from "redux-state-sync";
import storage from "redux-persist/lib/storage";
import authSlice from "../Slices/AuthSlice";

const persistConfig = {
  key: "root",
  storage,
};

// const persistedReducer = persistReducer(
//   persistConfig,
//   withReduxStateSync(rootReducer)
// );

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
