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
      <ChatHeader selectedUser={selectedUser}/>
      <MessageSkeletons />
      <MessageInput selectedUser={selectedUser}/>
    </div>
  );

  return (
    <div className="flex flex-1 flex-col overflow-auto" >
      <ChatHeader selectedUser={selectedUser} />
      <p>testebjsd ddn sn dkmsnldd</p>
      <MessageInput selectedUser={selectedUser} />
    </div>
  );
};

export default ChatContainer;