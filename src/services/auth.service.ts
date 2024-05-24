import { authKey } from "@/constants/authKey";
import { decodedToken } from "@/utils/jwtDecode";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

// 1. store userInfo as accessToken
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

// 2. decode and use userInfo from accessToken
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
      // role: "user",
    };
  }
};

// 3. Check that if any user is logged in at this moment through boolean value, It will be use for conditional rendering.
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

// 4. Remove the user (use mainly for logout)
export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

// to generate access by the help of refresh token
export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: "http://localhost:5000/api/refreshToken",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
