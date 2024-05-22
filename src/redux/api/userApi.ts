import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDonors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/donor-list",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          donors: response,
          meta: meta,
        };
      },
      //   providesTags: 'user',
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllDonorsQuery } = userApi;
