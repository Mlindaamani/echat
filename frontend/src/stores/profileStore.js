import create from "zustand";
import { axiosInstance } from "../config/axios";

export const useProfile = create((set, get) => ({
  profile: null,
  uploading: false,
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

  uploadProfile: async (photo_base64) => {
    set({ uploading: true });
    try {
      const response = await axiosInstance.post(
        "/users/profile/upload",
        photo_base64
      );
      // Refresh profile data after upload
      get().getProfile();
      set({ uploading: false });
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ uploading: false });
    }
  },
}));
