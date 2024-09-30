import { createApi } from '@reduxjs/toolkit/query/react';

import clientDataJson from '../shared/data/clientData.json';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async () => {
    return { data: clientDataJson };
  },
  endpoints: (builder) => ({
    getClientData: builder.query({
      query: () => '',
    }),
  }),
});

export const { useGetClientDataQuery } = apiSlice;
export default apiSlice;
