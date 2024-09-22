import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Ensure this is the correct path
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/testData";

const store = configureStore({
  reducer: {
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
