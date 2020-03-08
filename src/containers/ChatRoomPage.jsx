import React from "react";

import ChatBox from 'components/ChatBox'
import useSocketMessages from 'hooks/useSocketMessages'

const ChatRoomPage = () => {
  const messages = useSocketMessages()

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl uppercase font-semibold">Chatroom</h1>
        <p>Discuss anything</p>
      </div>
      <ChatBox />
      <div className="mt-6">
        {
          JSON.stringify(messages)
        }
      </div>
    </div>
  )
}

export default ChatRoomPage