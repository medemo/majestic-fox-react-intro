import React, { useState } from 'react'
import socket from '../services/socket'
import useSocketMessages from '../hooks/useSocketMessages'

function Chat(props) {
  const [text, setText] = useState('')

  const messages = useSocketMessages()

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
      {
        JSON.stringify(messages)
      }
    </form>
  )
}

// class Chat extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: ''
//     }
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     socket.emit('message', this.state.text)
//     this.setState({
//       text: ''
//     })
//   }

//   componentDidMount() {
//     this.messageHandler = msg => {
//       console.log('incoming message: ', msg)
//     }

//     socket.on('message', this.messageHandler)
//   }

//   componentWillUnmount() {
//     socket.off('message', this.messageHandler)
//   }


//   render() {
//     return (
//       <form
//         className="w-100"
//         onSubmit={this.handleSubmit}
//       >
//         <textarea
//           className="border border-gray-700 rounded px-3 py-2 mb-3 w-full"
//           name="body"
//           placeholder="message"
//           value={this.state.text}
//           onChange={e => this.setState({ text: e.target.value })}
//         />
//         <button
//           className="block border border-gray-700 rounded px-5 py-2"
//           type="submit"
//         >
//           Send Message
//         </button>
//       </form>
//     )

//   }
// }

export default Chat