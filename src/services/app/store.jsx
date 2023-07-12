import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/slice';
import selectedTeamMembersSlice from '../features/selected-team-members/slice';
import { ourTeamApi } from '../features/our-team/api';
import authMiddleware from '../features/user/middlewares';

const store = configureStore({
  reducer: {
    user: userSlice,
    selectedTeamMembers: selectedTeamMembersSlice,
    [ourTeamApi.reducerPath]: ourTeamApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([ourTeamApi.middleware, authMiddleware]),
});

export default store;
