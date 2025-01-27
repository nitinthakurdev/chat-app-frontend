import { io, Socket } from "socket.io-client";

export let socket:Socket;

export function setupSocketconnection() {
    socket = io(import.meta.env.VITE_BASE_ENDPOINT,{
        transports:["websocket"],
        secure:true,
        query:{
            userId:sessionStorage.getItem("id")
        }
    });
    socketConnectionEvents();
    socket.on("getOnlineUser",(userIds)=>{
      console.log(userIds)
    })
}

function socketConnectionEvents(){
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