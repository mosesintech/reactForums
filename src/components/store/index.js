import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/usersSlice.js';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})