import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  storeTokens,
  removeTokens,
} from "../utils/localStorage";

const { VITE_BACKEND_URL_DEV, VITE_BACKEND_URL_PROD } =
  import.meta.env;

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? VITE_BACKEND_URL_DEV
      : VITE_BACKEND_URL_PROD,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const previousRequest = error.config;
    if (error.response.status === 401 && !previousRequest.sent) {
      previousRequest.sent = true;

      try {
        const refreshToken = getRefreshToken();
        const { accessToken } = (
          await axiosInstance.post("/auth/refresh-token", {
            refreshToken,
          })
        ).data;
        storeTokens(accessToken, refreshToken);
        previousRequest.headers.Authorization = `JWT ${accessToken}`;
        return axiosInstance(previousRequest);
      } catch (refreshError) {
        removeTokens();
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
