import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface authState {
  user: {
    userId: string;
    email: string;
  } | null;
  token: string | null;
}

const initialState: authState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential(
      state,
      action: PayloadAction<{
        user: {
          userId: string;
          email: string;
        };
        token: string;
      }>
    ) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout(state) {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setCredential } = authSlice.actions;
export default authSlice.reducer;
