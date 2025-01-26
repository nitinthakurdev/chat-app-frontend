import { FC, ReactElement, useEffect, useState } from "react";
// local imports
import { IChatUser, IMessageResponse } from "@/types/Auth.types";
import { ChatHeader, MessageInput, MessageSkeletons } from "@/constants/Components.lazy";
import { useGetMessagesMutation } from "@/services/message.service";
import { useSelector } from "react-redux";
import { formatMessageTime } from "@/utils/utils";

const ChatContainer: FC<IChatUser> = ({ selectedUser }): ReactElement => {

  const [getMessages, { isLoading }] = useGetMessagesMutation();
  const [messages, setmessage] = useState<IMessageResponse[] | []>([]);
  const { logedInUser } = useSelector((state: any) => state);

  const Getmessages = async (id: string) => {
    try {
      const res = await getMessages(id).unwrap();
      setmessage(res.data)
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    Getmessages(selectedUser._id)
  }, [selectedUser]);

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


      <div className="flex-1 overflow-y-auto p-4 space-y-4" >
        {
          messages.map((message: IMessageResponse) => (
            <div key={message._id} className={`chat ${message.sender_id === logedInUser._id ? "chat-end" : "chat-start"}`} >
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

      {/* <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
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
        
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}


      <MessageInput selectedUser={selectedUser} />
    </div>
  );
};

export default ChatContainer;