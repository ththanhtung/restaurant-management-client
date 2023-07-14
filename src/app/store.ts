import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const useTypedSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store;
