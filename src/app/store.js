import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/Nav/NavSlice"
export const store = configureStore({
  reducer: {
    Navbar : carReducer
  },
});
