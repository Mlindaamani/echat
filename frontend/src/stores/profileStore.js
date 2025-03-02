import create from "zustand";
import { axiosInstance } from "../config/axios";

export const useProfile = create((set, get) => ({
  profile: null,
  uploading: false,

  getProfile: async () => {
    try {
      const { data } = await axiosInstance.get("/users/profile/me");
      set({ profile: data });
    } catch (error) {
      console.log(error.message);
    }
  },

  uploadProfile: async (photo) => {
    set({ uploading: true });
    try {
      const response = await axiosInstance.post(
        "/users/profile/upload",
        photo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      get().getProfile();
      console.log(response.data);
      set({ uploading: false });
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ uploading: false });
    }
  },
}));
