/* eslint-disable @next/next/no-img-element */
import { openSideBar } from '@/Redux/Features/SideBarFeature'
import React from 'react'
import { IoCloseCircleSharp, IoLogoWechat } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { BiLogOut, BiLogOutCircle } from 'react-icons/bi'
import {
  AiFillRightCircle,
  AiFillSetting,
  AiOutlineContacts,
  AiOutlineFileAdd,
  AiOutlineSearch,
} from 'react-icons/ai'
import { SlDocs } from 'react-icons/sl'
import { TbHelpHexagon } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { toogleReducer } from '@/Redux/Features/ModalFeatures'
type Props = {}

const SideBar = (Props: Props) => {
  const { toggleSideBar } = useSelector((state: any) => state.SideBar)
  const [isHover, setIsHover] = React.useState(false)
  const [toggleUser, setToggleUser] = React.useState(false)
  const dispatch = useDispatch()

  const normalStyle = `bg-[#eb5858] w-0 md:w-[105px] rounded-r-3xl h-auto min-h-screen hover:w-[445px] transition-all ease-in-out duration-500 z-50 absolute left-0`
  const responsiveStyle =
    'bg-[#eb5858] w-[390px] rounded-r-3xl min-h-screen z-50 duration-300 absolute left-0 overflow-y-hidden'

  const userData = {
    firstList: [
      {
        name: 'User Info',
        href: '',
      },
      {
        name: 'Preference',
        href: '',
      },
      {
        name: 'Calender',
        href: '',
      },
      {
        name: 'Security',
        href: '',
      },
      {
        name: 'Billing',
        href: '',
      },
    ],
    secondList: [
      {
        name: 'Help',
        icon: <TbHelpHexagon className="text-2xl" />,
        href: '',
      },
      {
        name: 'Settings',
        icon: <AiFillSetting className="text-2xl" />,
        href: '',
      },
      {
        name: 'Docs',
        icon: <SlDocs className="text-2xl" />,
        href: '',
      },
      {
        name: 'Logout',
        icon: <BiLogOutCircle className="text-2xl" />,
        href: '',
      },
    ],
  }

  return (
    <div
      className={`${
        !toggleSideBar ? responsiveStyle : normalStyle
      } overflow-hidden`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="absolute right-3 top-4 text-2xl text-white flex md:hidden">
        <IoCloseCircleSharp onClick={() => dispatch(openSideBar(true))} />
      </div>
      <div className="min-w-full h-auto grid place-content-center pt-20">
        <div className="flex justify-evenly gap-4">
          <IoLogoWechat className="text-[50px] font-extrabold text-white" />
          {isHover || !toggleSideBar ? (
            <h1 className="text-[30px] font-bold mt-1 text-white">DOOM</h1>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center pt-7 hover:scale-110 cursor-pointer transition-all mb-5">
        <img
          onClick={() => {
            setToggleUser(!toggleUser)
          }}
          className="md:w-16 w-10 h-10 md:h-16 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
          alt="Bordered avatar"
        />
      </div>
      {isHover || !toggleSideBar ? (
        <>
          <p className="mt-2 text-xl text-gray-200 text-center font-medium -tracking-tighter">
            Aravind Pc
          </p>

          <div className="mt-5 flex gap-6 justify-center text-3xl text-white">
            <div className="p-4 hover:shadow-2xl rounded-full cursor-pointer">
              <AiOutlineSearch />
            </div>
            <div
              className="p-4 hover:shadow-2xl rounded-full cursor-pointer"
              onClick={() => {
                dispatch(openSideBar(true))
                dispatch(toogleReducer('AddContact'))
              }}
            >
              <AiOutlineFileAdd />
            </div>
            <div
              className="p-4 hover:shadow-2xl rounded-full cursor-pointer"
              onClick={() => {
                dispatch(openSideBar(true))
                dispatch(toogleReducer('AllContact'))
              }}
            >
              <AiOutlineContacts />
            </div>
            <div className="p-4 hover:shadow-2xl rounded-full cursor-pointer">
              <BiLogOut />
            </div>
          </div>
        </>
      ) : null}

      {isHover || !toggleSideBar ? (
        <>
          {/* {toggleUser && ( */}
          <motion.div
            initial={{ opacity: toggleUser ? 1 : 0, x: toggleUser ? -10 : 0 }}
            animate={{ opacity: toggleUser ? 1 : 0, x: toggleUser ? 5 : 0 }}
            exit={{ opacity: !toggleUser ? 0 : 1, x: toggleUser ? -10 : 0 }}
            transition={{ opacity: !toggleUser ? 0 : 1 }}
            className="px-10 relative z-50"
          >
            <div className="w-[90%] h-auto bg-white rounded-md p-5 px-10 mt-6 shadow-2xl absolute left-[50%] right-[50%] -translate-x-[50%]">
              <p className="text-md text-red-500 mb-2">Account</p>
              <ul className="grid grid-cols-2 gap-3 border-b-2 pb-6 pt-3">
                {userData.firstList.map((item, index) => (
                  <li
                    className="cursor-pointer text-md text-gray-500 hover:text-red-700"
                    key={index}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <ul className="grid grid-cols-2 gap-3 py-6">
                {userData.secondList.map((item, index) => (
                  <li
                    className="cursor-pointer text-md text-gray-500 hover:text-red-700 flex gap-3"
                    key={index}
                  >
                    {item.icon}
                    <p> {item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* )} */}
        </>
      ) : null}
      {/* User Tags */}
      <div className={`mb-2  px-3  ${isHover && 'md:px-10'} `}>
        <div
          className={`w-full h-auto ${
            isHover && 'shadow-lg'
          } rounded-3xl p-4 flex gap-4 justify-around `}
        >
          <div className="relative md:w-16 w-10 h-10 md:h-16">
            <div className="absolute top-[50%] -translate-y-[50%]">
              <img
                className="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 z-20"
                src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
                alt="Bordered avatar"
              />
              <div className="w-4 h-4 rounded-full bg-green-500 absolute right-0 bottom-2"></div>
            </div>
          </div>
          {isHover || !toggleSideBar ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
              className="flex gap-6"
            >
              <div className="grid place-content-center">
                <h1 className="text-md md:text-xl font-semibold">Aravind Pc</h1>
                <p className="text-xs md:text-sm text-gray-700">7559017884</p>
              </div>
              <div className="flex items-center text-white">
                <AiFillRightCircle className="text-4xl" />
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>

      {/* User Tags */}
    </div>
  )
}

export default SideBar
