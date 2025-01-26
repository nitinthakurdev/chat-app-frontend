import { IChatUser } from "@/types/Auth.types";
import { FC, ReactElement, useState } from "react";

const MessageInput:FC<IChatUser> = ({selectedUser}):ReactElement => {
    const [text,setText] = useState<string>("");
    const [imagePriview,setImagePriview] = useState<null | string>(null)
  return (
    <div>MessageInput</div>
  );
};

export default MessageInput;