import { configureStore } from '@reduxjs/toolkit';
import { ourTeamApi } from '../features/our-team/api';

const store = configureStore({
  reducer: {
    [ourTeamApi.reducerPath]: ourTeamApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ourTeamApi.middleware),
});

export default store;
