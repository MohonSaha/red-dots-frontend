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
      //   transformResponse: (response: IUser[], meta: IMeta) => {
      //     return {
      //       donors: response,
      //       meta: meta,
      //     };
      //   },
      providesTags: [tagTypes.post],
    }),
    // getRequestsMadeByMe: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: "/donation-request-by-me",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   //   transformResponse: (response: IUser[], meta: IMeta) => {
    //   //     return {
    //   //       donors: response,
    //   //       meta: meta,
    //   //     };
    //   //   },
    //   providesTags: [tagTypes.request],
    // }),

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

export const { useCreatePostForBloodMutation, useGetBloodPostsQuery } =
  requestApi;
