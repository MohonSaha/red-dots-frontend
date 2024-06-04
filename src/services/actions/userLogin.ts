import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { authKey } from "@/constants/authKey";
import { redirect } from "next/navigation";
import setAccessToken from "./setAccessToken";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    // cache: "no-store",
    credentials: "include",
  });

  const userInfo = await res.json();

  // Check if accessToken is present and set it if true
  if (userInfo.data?.accessToken) {
    setAccessToken(userInfo.data.accessToken, { redirect: "/" });
  }

  return userInfo;
};
