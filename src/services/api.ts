import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', 'reqres-free-v1');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUsers: builder.query({
      query: (page = 1) => `/users?page=${page}&per_page=10`,
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useLoginMutation, useGetUsersQuery, useGetUserByIdQuery } = api;
