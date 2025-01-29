import { io } from "socket.io-client";


export const socket = io(import.meta.env.VITE_BASE_ENDPOINT, {
  transports: ['websocket'],
  secure: true,
});