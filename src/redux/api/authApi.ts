import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      //   providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetSingleUserQuery } = authApi;
