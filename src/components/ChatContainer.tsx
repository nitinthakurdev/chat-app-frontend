import { FC, ReactElement, useEffect } from "react";
// local imports
import { IChatUser } from "@/types/Auth.types";
import { ChatHeader, MessageInput, MessageSkeletons } from "@/constants/Components.lazy";
import { useGetMessagesMutation } from "@/services/message.service";

const ChatContainer: FC<IChatUser> = ({ selectedUser }): ReactElement => {

  const [getMessages, { isLoading }] = useGetMessagesMutation();

  const Getmessages = async (id: string) => {
    try {
      const res = await getMessages(id).unwrap();
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    Getmessages(selectedUser._id)
  }, [selectedUser])

  if (isLoading) return (
    <div>
      <ChatHeader selectedUser={selectedUser} />
      <MessageSkeletons />
      <MessageInput selectedUser={selectedUser} />
    </div>
  );

  return (
    <div className="flex flex-1 flex-col overflow-auto" >
      <ChatHeader selectedUser={selectedUser} />


      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>


      <MessageInput selectedUser={selectedUser} />
    </div>
  );
};

export default ChatContainer;