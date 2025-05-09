import toast from "react-hot-toast";
import create from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../config/axios";
import { getBackendErrorMessage } from "../utils/functions";
import { useSocket } from "./socketStore";
import {
  removeTokens,
  storeTokens,
  getAccessToken,
} from "../utils/localStorage";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      isAuthenticated: !!getAccessToken(),

      register: async (username, email, password, navigate) => {
        if (!username || !email || !password) {
          return toast.error("Please fill out all fields!");
        }
        set({ loading: true, error: null });

        try {
          await axiosInstance.post("/auth/register/", {
            username,
            email,
            password,
          });

          set({ loading: false });
          toast.success("You have successfully registered", {
            duration: 2000,
            id: "register",
          });
          navigate("/login");
        } catch (error) {
          set({ loading: false });
          toast.error(getBackendErrorMessage(error), {
            duration: 2000,
            position: "top-center",
            id: "register",
          });
        }
      },

      login: async (email, password, navigate) => {
        if (!email || !password) return toast.error("All field are required!");
        set({ loading: true });
        try {
          const { id, username, photo, accessToken, refreshToken } = (
            await axiosInstance.post("/auth/login/", {
              email,
              password,
            })
          ).data;

          storeTokens(accessToken, refreshToken);

          set({
            isAuthenticated: true,
            loading: false,
            user: { id, username, photo },
          });

          toast.success("You have successfully logged in.", {
            duration: 4000,
            position: "top-right",
            id: "login",
          });
          navigate("/");
        } catch (error) {
          set({ loading: false });
          toast.error(getBackendErrorMessage(error), {
            duration: 2000,
            position: "top-center",
            id: "login",
          });
        }
      },

      logout: (navigate) => {
        removeTokens();
        set({ isAuthenticated: false, user: null });
        useSocket.getState().disconnect();
        navigate("/login");
      },
    }),

    { name: "auth-storage", getStorage: () => localStorage }
  )
);
