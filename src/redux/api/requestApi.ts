import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

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
      providesTags: [tagTypes.request],
    }),
    getRequestsMadeByMe: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/donation-request-by-me",
        method: "GET",
        params: arg,
      }),
      //   transformResponse: (response: IUser[], meta: IMeta) => {
      //     return {
      //       donors: response,
      //       meta: meta,
      //     };
      //   },
      providesTags: [tagTypes.request],
    }),

    updateRequestStatus: build.mutation({
      query: (data) => {
        return {
          url: `/donation-request/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.request],
    }),
    deleteRequest: build.mutation({
      query: (id: string | undefined) => ({
        url: `/donation-request/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.request],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMyRequestsQuery,
  useCreateRequestForBloodMutation,
  useGetRequestsMadeByMeQuery,
  useUpdateRequestStatusMutation,
  useDeleteRequestMutation,
} = requestApi;
