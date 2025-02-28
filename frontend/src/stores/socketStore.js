import create from "zustand";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { authStore } from "./authStore";
import { messageStore } from "./messageStore";
import notify from "../assets/sounds/notify.mp3";

const { VITE_SOCKET_DEV, VITE_PROD_URL } = import.meta.env;

const SOCKET_SERVER_URI =
  import.meta.env.MODE === "development" ? VITE_SOCKET_DEV : VITE_PROD_URL;

console.log(VITE_SOCKET_DEV);

export const useSocket = create((set, get) => ({
  socket: null,
  onlineUsers: [],

  connectToSocketServer: () => {
    const { user } = authStore.getState();
    const socket = io(SOCKET_SERVER_URI, {
      query: {
        userId: user?.id,
      },
    });
    socket.connect();

    set({ socket: socket });

    socket.on("new-message", (newMessage) => {
      const { addMessage } = messageStore.getState();
      const sound = new Audio(notify);
      addMessage(newMessage);
      sound.play();
    });

    socket.on("join-chat", (userId) => {
      const { user } = authStore.getState();
      const message =
        user.id === userId ? "Success! Joined Chat" : `${userId} Joined Chat`;

      toast.success(message, {
        id: "join-chat",
        duration: 5000,
        position: "bottom-right",
      });
    });

    socket.on("leave-chat", (userId) => {
      const { user } = authStore.getState();
      const message =
        user.id === userId ? "Disconnected from Chat" : `${userId} Left a Chat`;

      toast.success(message, {
        id: "join-chat",
        duration: 5000,
        position: "bottom-right",
      });
    });

    socket.on("online-users", (users) => {
      set({ onlineUsers: users });
    });

    socket.on("typing", (typingUser) => {
      set({ typing: true, typingUser: typingUser });
    });
  },

  unsubscribeFromMessages: () => {
    const { socket } = get();
    socket.off("new-messages");
  },

  disconnect: () => {
    const { socket, unsubscribeFromMessages } = get();

    if (socket.connected) {
      socket.disconnect();
      unsubscribeFromMessages();
    }
  },
}));
