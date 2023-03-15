/* eslint-disable react/no-children-prop */
import SideBar from '@/Components/SideBar/SideBar'
import React from 'react'
import Header from '../Components/Header/Header'
import ResponsiveHeader from '../Components/Header/Responsive_Header'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import ChatPage from '@/Components/ChatPage/ChatPage'
import MainModal from '@/Components/Modal/MainModal'
import AddContact from '@/Components/ModalComponents/AddContact'
import AllContacts from '../Components/ModalComponents/AllContacts'

export default function Homepage() {
  const { toggleSideBar } = useSelector((state: any) => state.SideBar)
  const { toggleModal } = useSelector((state: any) => state.MainModal)
  return (
    <>
      {toggleModal !== '' && toggleModal === 'AddContact' ? (
        <MainModal
          Title="Add Contact"
          Description="You Can Add New Contact From Here!"
          children={<AddContact />}
          ButtonNameOne="Add"
          ButtonNameTwo="No"
        />
      ) : null}
      {toggleModal !== '' && toggleModal === 'AllContact' ? (
        <MainModal
          Title="All Contact"
          Description="You Can See All Contact From Here!"
          children={<AllContacts />}
          ButtonNameOne="Apply"
          ButtonNameTwo="Decline"
        />
      ) : null}
      <div
        className={`max-h-screen ${
          !toggleSideBar && 'overflow-hidden'
        } md:overflow-hidden`}
      >
        {/* Responsive Part */}
        <div className="flex md:hidden absolute w-full">
          <AnimatePresence>
            {!toggleSideBar ? (
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: toggleSideBar ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <SideBar />
              </motion.div>
            ) : (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: !toggleSideBar ? 1 : 0 }}
                transition={{ duration: 1.5 }}
                className="min-w-full"
              >
                <ResponsiveHeader />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Responsive Part */}

        <div className={`hidden md:flex`}>
          <SideBar />
        </div>
        <div className="pt-20 md:p-10 md:px-40">
          <Header />
          <ChatPage />
        </div>
      </div>
    </>
  )
}
