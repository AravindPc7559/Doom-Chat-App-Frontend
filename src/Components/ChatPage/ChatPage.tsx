import React, { useEffect, useRef } from 'react'
import ChatTag from '../Common/ChatTag'
import { useSelector } from 'react-redux'
import { IoSend } from 'react-icons/io5'

type Props = {}

const ChatPage = (props: Props) => {
  const { toggleSideBar } = useSelector((state: any) => state.SideBar)

  const data = [
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'Me',
    },
    {
      message: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      type: 'Me',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'Me',
    },
    {
      message: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      type: 'Me',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'Me',
    },
    {
      message: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      type: 'Me',
    },
    {
      message:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse animi assumenda eveniet veritatis eaque sunt libero dignissimos. Velit, inventore?',
      type: 'User',
    },
  ]
  return (
    <div className="w-full py-10 md:py-0">
      <div className="px-5 md:max-h-[80vh] overflow-y-scroll">
        {data.map((item, index) => {
          return (
            <div key={index}>
              {item.type === 'User' ? (
                <div className="flex justify-start pb-9">
                  <ChatTag type={item.type} message={item.message} />
                </div>
              ) : (
                <div className="flex justify-end pb-9">
                  <ChatTag type={item.type} message={item.message} />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div
        className={`${
          toggleSideBar && 'fixed bottom-0'
        }  w-full md:relative mt-5 z-10`}
      >
        <input
          type="text"
          className="w-full p-5 border-2 focus:outline-none"
          placeholder="Enter your message here....."
        />
        <button
          className={`${
            toggleSideBar && 'absolute right-5 top-[50%] -translate-y-[50%]'
          }`}
        >
          <IoSend className='text-2xl' />
        </button>
      </div>
    </div>
  )
}

export default ChatPage
