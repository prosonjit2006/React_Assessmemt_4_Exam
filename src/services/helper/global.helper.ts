import type { AxiosError } from "axios";
import Cookies from 'js-cookie'

export const getErrorMessage = (error: unknown): string => {
  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return axiosError.response?.data?.message || "Something went wrong";
  }
  return "Something went wrong";
};
export const forceLogout = () => {
  Cookies.remove("token");
  Cookies.remove("role");
  Cookies.remove("userDetails");
  window.location.href = "/";
};
