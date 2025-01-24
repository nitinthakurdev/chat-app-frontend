import { ChatContainer, NoChatSelected, SideBar } from '@/constants/Components.lazy'
import  { FC, ReactElement } from 'react'

const Home:FC = ():ReactElement => {
  return (
    <div className="h-screen bg-base-200">
    <div className="flex items-center justify-center pt-4 px-4">
      <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
        <div className="flex h-full rounded-lg overflow-hidden">
          <SideBar />

          {true ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home