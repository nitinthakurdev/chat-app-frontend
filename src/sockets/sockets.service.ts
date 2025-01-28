import { io, Socket } from "socket.io-client";

export let socket: Socket;

export function setupSocketconnection() {
  socket = io(import.meta.env.VITE_BASE_ENDPOINT, {
    transports: ["websocket"],
    secure: true,
    query: {
      userId: sessionStorage.getItem("id")
    }
  });
  socketConnectionEvents();
}

function socketConnectionEvents() {
  socket.on('connect', () => {
    console.log('Connected to server');
  });

  socket.on('disconnect', (reason: Socket.DisconnectReason) => {
    console.log(`Reason: ${reason}`);
    socket.connect();
  });

  socket.on('connect_error', (error: Error) => {
    console.log(`${error}`);
    socket.connect();
  });

}

export function getOnlineUser() {
  if (!socket) {
    console.error("Socket is not initialized. Please call setupSocketconnection first.");
    return;
  }

  socket.on("getOnlineUser", (users) => {
    console.log("Online users received:", users);
  });
}


