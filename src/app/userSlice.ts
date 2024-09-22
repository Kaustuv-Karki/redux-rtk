import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any | null; // Adjust the type according to your actual user object
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer; // Export the reducer to be used in the store
