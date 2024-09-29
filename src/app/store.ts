import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Ensure this is the correct path for the user slice
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/testData"; // Adjust path if necessary

// Configure the Redux store
const store = configureStore({
  reducer: {
    user: userReducer, // User slice reducer
    [productsApi.reducerPath]: productsApi.reducer, // Products API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), // Add middleware from productsApi
});

// Set up listeners for refetching on focus, reconnect, etc.
setupListeners(store.dispatch);

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
