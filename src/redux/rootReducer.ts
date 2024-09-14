import { baseApi } from "./api/baseApi";
import donorReducer from "./features/GroupMailSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  groupMail: donorReducer,
};
