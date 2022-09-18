import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../features/UserAuth/AuthSlicer';

export const store = configureStore({
  reducer: {
    Auth: AuthSlice,
  },
});
