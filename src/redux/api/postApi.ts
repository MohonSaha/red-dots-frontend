import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const requestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPostForBlood: build.mutation({
      query: (data) => ({
        url: "/create-blood-post",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.post],
    }),
    getBloodPosts: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/blood-posts",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IBloodPost[], meta: IMeta) => {
        return {
          posts: response,
          meta: meta,
        };
      },
      providesTags: [tagTypes.post],
    }),
    acceptBloodPost: build.mutation({
      query: (data) => ({
        url: "/accept-blood-post",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.post],
    }),
    getSinglePost: build.query({
      query: (id: string | undefined) => ({
        url: `/blood-posts/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.post],
    }),
    getMyAcceptedPost: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/my-accepted-post",
        method: "GET",
        params: arg,
      }),
      //   transformResponse: (response: IUser[], meta: IMeta) => {
      //     return {
      //       donors: response,
      //       meta: meta,
      //     };
      //   },
      providesTags: [tagTypes.post],
    }),
    deleteAcceptedPost: build.mutation({
      query: (id: string | undefined) => ({
        url: `/delete-accept-post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.post],
    }),

    // updateRequestStatus: build.mutation({
    //   query: (data) => {
    //     return {
    //       url: `/donation-request/${data.id}`,
    //       method: "PATCH",
    //       data: data.body,
    //     };
    //   },
    //   invalidatesTags: [tagTypes.request],
    // }),
  }),
  overrideExisting: false,
});

export const {
  useCreatePostForBloodMutation,
  useGetBloodPostsQuery,
  useAcceptBloodPostMutation,
  useGetSinglePostQuery,
  useGetMyAcceptedPostQuery,
  useDeleteAcceptedPostMutation,
} = requestApi;
