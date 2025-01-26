import { IChatUser } from "@/types/Auth.types";
import { FC, ReactElement } from "react";


const ChatHeader: FC<IChatUser> = ({ selectedUser }): ReactElement => {
    return (
        <div className="p-2.5 border-b border-base-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="size-10 rounded-full relative">
                            <img src={selectedUser.profilePic.image_Url || "/avatar.png"} alt={selectedUser.username} />
                        </div>
                    </div>

                    {/* User info */}
                    <div>
                        <h3 className="font-medium">{selectedUser.username}</h3>
                        <p className="text-sm text-base-content/70">
                            {false ? "Online" : "Offline"}
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ChatHeader;