import { useEffect, useState } from 'react'
import socket from '../services/socket'

function useSocketMessages() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const handler = msg => {
      setMessages(msgs => [...msgs, msg])
    }

    socket.on('message', handler)

    return () => {
      socket.off('message', handler)
    }
  }, [])

  return messages
}

export default useSocketMessages
