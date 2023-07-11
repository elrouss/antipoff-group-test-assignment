import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './api';

const initialState = {
  user: null,
  isAuthChecked: false,

  process: {
    isLoading: false,
    error: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkUserAuth(state) {
      const token = localStorage.getItem('token');

      if (token) {
        state.user = 'user';
      }

      state.isAuthChecked = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.process.isLoading = true;
        state.process.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.id;

        state.process.isLoading = false;
        state.process.error = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.process.isLoading = true;
        state.process.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.user = 'user';

        state.process.isLoading = false;
        state.process.error = null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload;
      })

      .addDefaultCase((state) => state);
  },
});

export const { checkUserAuth } = userSlice.actions;
export default userSlice.reducer;
