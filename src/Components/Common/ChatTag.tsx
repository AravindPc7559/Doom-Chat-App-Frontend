import React from 'react'

type Props = {
  type: string
  message: string
}

const ChatTag = ({ type, message }: Props) => {
  return (
    <div
      className={`max-w-[800px] p-5   ${
        type === 'User' ? 'bg-gray-200 rounded-r-3xl rounded-bl-3xl' : 'bg-green-300 rounded-l-3xl rounded-br-3xl'
      }`}
    >
      <p className="text-xl leading-8">{message}</p>
    </div>
  )
}

export default ChatTag
