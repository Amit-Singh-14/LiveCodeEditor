import { io } from "socket.io-client";

export const initSocket = async () => {
  return io(import.meta.env.VITE_APP_BACKEND_URL);
};
