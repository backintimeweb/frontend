import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/posts",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `/`,
    }),

    getPostById: builder.query({
      query: (id) => `/${id}`,
    }),

    getPostHtmlById: builder.query({
      query: (id) => ({url: `/html/${id}`, responseHandler: (response) => response.text()}),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetPostHtmlByIdQuery } = postsApi;
