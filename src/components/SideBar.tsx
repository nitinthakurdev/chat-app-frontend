import { FC, ReactElement } from "react";
import { Users } from "lucide-react";
// local imports
import { useGetAllUserQuery } from "@/services/auth.service";
import { SideBarSkeletons } from "@/constants/Components.lazy";
import { IAllUserResponse, ISelectedUsers } from "@/types/Auth.types";

const SideBar: FC<ISelectedUsers> = ({setSelectedUser,selectedUser}): ReactElement => {
  const { data, isLoading } = useGetAllUserQuery("");
  

  if (isLoading) {
    return <SideBarSkeletons />
  }

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5" >
        <div className="flex items-center gap-2 " >
          <Users/>
          <span className="font-medium hidden lg:block"  >Contacts</span>
        </div>
      </div>

      <div className="overfloy-y-auto w-full py-3">
      {data.data.map((user:IAllUserResponse) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
               ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic.image_Url || "/avatar.png"}
                alt={user.username}
                className="size-12 object-cover rounded-full"
              />
              {/* {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                />
              )} */}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.username}</div>
              <div className="text-sm text-zinc-400">
                Offline
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;