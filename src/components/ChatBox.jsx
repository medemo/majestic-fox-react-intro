import React, { useState, useEffect } from 'react'
import socket from '../services/socket'

function Chat(props) {
  const [text, setText] = useState('')

  useEffect(() => {
    const handler = msg => {
      console.log('incoming message: ', msg)
    }

    socket.on('message', handler)

    return () => {
      socket.off('message', handler)
    }
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    socket.emit('message', text)
    setText('')
  }


  return (
    <form
      className="w-100"
      onSubmit={handleSubmit}
    >
      <textarea
        className="border border-gray-700 rounded px-3 py-2 mb-3 w-full"
        name="body"
        placeholder="message"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className="block border border-gray-700 rounded px-5 py-2"
        type="submit"
      >
        Send Message
      </button>
    </form>
  )
}

export default Chat