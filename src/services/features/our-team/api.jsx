import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../../../utils/constants';

export const ourTeamApi = createApi({
  reducerPath: 'ourTeamApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),
  endpoints: (builder) => ({
    getOurTeam: builder.query({
      query: () => API.endPoints.ourTeam,
    }),
  }),
});

export const { useGetOurTeamQuery } = ourTeamApi;
