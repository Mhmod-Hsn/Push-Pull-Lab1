import { useState } from "react"
import { getData } from "./helpers/API"

function Messages() {
  const [messages, setMessages] = useState([])

  function getMsgs() {
    return getData().then((response) => {
      setMessages(response.reverse())
      console.log(messages)

      // ! Long Polling
      // getMsgs()
    })
  }
  // ! Short Polling
  // setInterval(() => {
  //   getMsgs()
  // }, 5000)

  // ! Long Polling
  setTimeout(() => {
    getMsgs()
  }, 1)

  return messages.map((message) => {
    return (
      <p key={message.id} className='mb-0'>
        {message.text}
      </p>
    )
  })
}
export default Messages
