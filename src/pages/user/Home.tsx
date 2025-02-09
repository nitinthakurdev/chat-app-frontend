import { ChatContainer, GroupChat, GroupModal, NoChatSelected, SideBar } from '@/constants/Components.lazy';
import { IAllUserResponse } from '@/types/Auth.types';
import { IGroupResponse } from '@/types/group.types';
import { Users } from 'lucide-react';
import { FC, ReactElement, useState } from 'react';


const Home: FC = (): ReactElement => {
  const [selectedUser, setSelectedUser] = useState<IAllUserResponse| null>(null);
  const [selectGroup, setSelectGroup] = useState<IGroupResponse| null>(null);




  return (
    <div className="h-[90vh] bg-base-200 ">
      <div className="flex items-center justify-center  pt-4 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-6rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <SideBar setSelectedUser={setSelectedUser} selectedUser={selectedUser} setSelectGroup={setSelectGroup} selectGroup={selectGroup} />

            {selectedUser ? <ChatContainer selectedUser={selectedUser} /> : selectGroup ?  <GroupChat selectedGroup={selectGroup} /> : <NoChatSelected />}
           
          </div>
        </div>
      </div>

      <div className="fixed rounded-full right-5 bottom-5 flex items-center justify-center">
        <div className="bg-green-500 flex h-10 max-w-10 hover:max-w-[150px] px-2 hover:px-3 gap-2 items-center rounded-full cursor-pointer group transition-all duration-700 overflow-hidden" onClick={() => {
          const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }} >
          <Users className="shrink-0" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
            Create group
          </span>
        </div>
      </div>

      <GroupModal />
    </div>
  );
};

export default Home;