import { ChatContainer, NoChatSelected, SideBar } from '@/constants/Components.lazy';
import { IAllUserResponse } from '@/types/Auth.types';
import { FC, ReactElement, useState } from 'react';


const Home: FC = (): ReactElement => {
  const [selectedUser,setSelectedUser] = useState<IAllUserResponse | null>(null);

  
  return (
    <div className="h-screen bg-base-200 ">
      <div className="flex items-center justify-center  pt-4 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <SideBar setSelectedUser={setSelectedUser} selectedUser={selectedUser} />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer selectedUser={selectedUser}  />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;