import axios from "axios";
import Cookies from "js-cookie";
import { forceLogout } from "../services/helper/global.helper";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
});

api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("error in axios interceptor", error.response);
    const originalRequest = error.config;
    if (
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      // toast.error(error.response.data.message);
      console.log("err comming in axios intercepter", error.response);
      // forceLogout();
      const refreshtoken = Cookies.get("refreshToken");
      console.log("refreshToken", refreshtoken);

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_API}/auth/refresh`,
          { refreshToken: refreshtoken },
        );
        console.log("refreshToken from res", response);
        const newAccessToken = response?.data?.newAccessToken;
        console.log("newAccess Token: ", newAccessToken);
        Cookies.set("token", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (error) {
        console.log("Error in response", error);
        forceLogout();
      }
    }
    return Promise.reject(error);
  },
);

export default api;
