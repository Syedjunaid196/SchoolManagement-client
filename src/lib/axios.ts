import axios from "axios";
import { config } from "process";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true

});
api.interceptors.request.use(async (config) => {
  // Only run on the server
  if (typeof window === "undefined") {
    const { headers } = await import("next/headers");
    const cookieHeader = (await headers()).get("cookie");
    if (cookieHeader) {
      config.headers.Cookie = cookieHeader;
    }
  }
  return config;
});
