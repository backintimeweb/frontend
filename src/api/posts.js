import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api',
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => `/posts`,
        }),

        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        })
    }),
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi