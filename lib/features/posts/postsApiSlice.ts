// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
  title: string;
  body: string;
  id: number;
  userId: number;
}

interface PostsApiResponse {
  post: Post[];
  total: number;
  skip: number;
  limit: number;
}

export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  reducerPath: "postsApi",
  refetchOnFocus: true, 
  keepUnusedDataFor:30, 
 
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<PostsApiResponse, number>({ query: () =>
       "posts", keepUnusedDataFor: 30 }),
    getPostsById: builder.query({
       query: (postId:number) =>
        `posts/${postId}`, keepUnusedDataFor: 30}),
    createPosts: builder.mutation({
      query: (newPost:Post) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
    putPosts: builder.mutation({
      query: ({newPost, postId}:{newPost:Post,postId:number}) => ({
        url: `posts/${postId}`,
        method: "PUT",
        body: newPost,
      }),
    }),
    deletePosts: builder.mutation({
      query: (postId:number) => ({
        url: `posts/${postId}`,
        method: "DELETE",
        // body: postId,
      }),
    }),
  }),
  })

export const { useGetPostsQuery } = postsApiSlice;
