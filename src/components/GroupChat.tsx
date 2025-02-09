import { GroupHeader, GroupInput } from "@/constants/Components.lazy";
import { IGroupChatProp } from "@/types/group.types";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import MessageSkeletons from "./skeletons/MessageSkeletons";
import { useGetGroupMessagesMutation } from "@/services/message.service";
import { IMessageResponse } from "@/types/Auth.types";
import { useSelector } from "react-redux";
import { socket } from "@/sockets/sockets.service";
import { formatMessageTime } from "@/utils/utils";
import { useGetAllUserQuery } from "@/services/auth.service";

const GroupChat:FC<IGroupChatProp> = ({selectedGroup}):ReactElement => {
  
  const [getMessages, { isLoading }] = useGetGroupMessagesMutation();
  const { data, isLoading:userLoading } = useGetAllUserQuery("");
  const [messages, setmessage] = useState<IMessageResponse[]>([]);
  const { logedInUser,DataGetSlice } = useSelector((state: any) => state);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [count,setCount] = useState<boolean>(true)

  

  const Getmessages = async (id: string) => {
    try {
      const res = await getMessages(id).unwrap();
      console.log(res)
      setmessage(res.data)
      setCount(false)
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    Getmessages(selectedGroup._id)
  }, [selectedGroup,DataGetSlice.sendMessage]);

  useEffect(()=>{
    socket.on("newMessage",(msg)=>{
      if(msg.receiver_id !== selectedGroup._id) return;
      setmessage((prevMessages) => [...prevMessages, msg]);
    })
    return () => {socket.off("newMessage")}
  },[])

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isLoading && count && userLoading) return (
    <div>
      <GroupHeader selectedGroup={selectedGroup} />
      <MessageSkeletons />
      <GroupInput selectedGroup={selectedGroup}/>
    </div>
  );
  return (
    <div className="flex flex-1 flex-col overflow-auto" >
      <GroupHeader selectedGroup={selectedGroup} />
      <div className="flex-1 overflow-y-auto p-4 space-y-4" >
              {
                messages.map((message: IMessageResponse) => (
                  <div key={message._id} ref={messageEndRef} className={`chat ${message.sender_id === logedInUser._id ? "chat-end" : "chat-start"}`} >
                    <div className="chat-image avatar" >
                      <div className="size-10 rounded-full border" >
                        <img src={message.sender_id === logedInUser._id ? logedInUser.profilePic?.image_Url : data?.data?.filter((i:any)=>i?._id === message.sender_id)[0]?.profilePic?.image_Url} alt="" />
                        
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
      <GroupInput selectedGroup={selectedGroup}/>
      </div>
  );
};

export default GroupChat;