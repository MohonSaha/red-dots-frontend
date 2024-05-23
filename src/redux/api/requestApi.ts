import { IMeta } from "@/types";
import { baseApi } from "./baseApi";

const requestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRequestForBlood: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data: data,
      }),
      // invalidatesTags: [tagTypes.specialties],
    }),
    getMyRequests: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/donation-request",
        method: "GET",
        params: arg,
      }),
      //   transformResponse: (response: IUser[], meta: IMeta) => {
      //     return {
      //       donors: response,
      //       meta: meta,
      //     };
      //   },
      // providesTags: "user",
    }),
  }),
  overrideExisting: false,
});

export const { useGetMyRequestsQuery, useCreateRequestForBloodMutation } =
  requestApi;
