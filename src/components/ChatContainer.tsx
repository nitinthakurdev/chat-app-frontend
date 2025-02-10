import { FC, ReactElement, useEffect, useRef, useState } from "react";
// local imports
import { IChatUser, IMessageResponse } from "@/types/Auth.types";
import { ChatHeader, MessageInput, MessageSkeletons } from "@/constants/Components.lazy";
import { useGetMessagesMutation } from "@/services/message.service";
import { useSelector } from "react-redux";
import { formatMessageTime } from "@/utils/utils";
import { socket } from "@/sockets/sockets.service";

const ChatContainer: FC<IChatUser> = ({ selectedUser }): ReactElement => {

  const [getMessages, { isLoading }] = useGetMessagesMutation();
  const [messages, setmessage] = useState<IMessageResponse[]>([]);
  const { logedInUser, DataGetSlice } = useSelector((state: any) => state);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState<boolean>(true);

  const Getmessages = async (id: string) => {
    try {
      const res = await getMessages(id).unwrap();
      setmessage(res.data)
      setCount(false)
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    Getmessages(selectedUser._id)
  }, [selectedUser, DataGetSlice.sendMessage]);

  useEffect(() => {
    socket.on("newMessage", (msg) => {
      if (msg.sender_id !== selectedUser._id) return;
      else {
        setmessage((prevMessages) => [...prevMessages, msg]);
      }
    })
    return () => { socket.off("newMessage") }
  }, [])

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isLoading && count) return (
    <div>
      <ChatHeader selectedUser={selectedUser} />
      <MessageSkeletons />
      <MessageInput selectedUser={selectedUser} />
    </div>
  );

  return (
    <div className="flex flex-1 flex-col overflow-auto" >
      <ChatHeader selectedUser={selectedUser} />


      <div className="flex-1 overflow-y-auto p-4 space-y-4" >
        {
          messages.map((message: IMessageResponse) => (
            <div key={message._id} ref={messageEndRef} className={`chat ${message.sender_id === logedInUser._id ? "chat-end" : "chat-start"}`} >
              <div className="chat-image avatar" >
                <div className="size-10 rounded-full border" >
                  <img src={message.sender_id === logedInUser._id ? logedInUser.profilePic?.image_Url : selectedUser.profilePic.image_Url} alt="" />
                </div>
              </div>
              <div className="chat-header mb-1 " >
                <time className="text-xs opacity-50 ml-1" >{formatMessageTime(message.createdAt)}</time>
              </div>
              <div className="chat-bubble flex flex-col " >
                {message.image && (
                  <img src={message.image.image_Url} alt="image" className="sm:max-w-[200px] rounded-md mb-2" />
                )
                }
                {message.text && (<p>{message.text}</p>)}
              </div>
            </div>
          ))
        }
      </div>

      <MessageInput selectedUser={selectedUser} />
    </div>
  );
};

export default ChatContainer;