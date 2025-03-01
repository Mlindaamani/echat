import create from "zustand";
import { axiosInstance } from "../config/axios";

export const useProfile = create((set) => ({
  profile: null,
  updatingProfile: false,
  loadingProfile: false,

  getProfile: async () => {
    set({ loadingProfile: true });
    try {
      const { data } = await axiosInstance.get("/users/profile/me");
      set({ profile: data, loadingProfile: false });
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ loadingProfile: false });
    }
  },

  updateProfile: async (profile_data) => {
    set({ updatingProfile: true });
    try {
      const response = await axiosInstance.put("/users/profile", profile_data);
      console.log(response.data);
      set({ updatingProfile: false });
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ updatingProfile: false });
    }
  },
}));
