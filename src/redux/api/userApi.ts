import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDonors: build.query({
      query: (queryString: string) => ({
        url: `/donor-list?${queryString}`, // Append queryString directly to the URL
        method: "GET",
      }),
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          donors: response,
          meta: meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    getSingleDonor: build.query({
      query: (id: string | undefined) => ({
        url: `/donor-list/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateUser: build.mutation({
      query: (data) => {
        return {
          url: `/update-user/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllDonorsQuery,
  useGetSingleDonorQuery,
  useUpdateUserMutation,
} = userApi;
