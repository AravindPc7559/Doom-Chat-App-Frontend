import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { toogleReducer } from '@/Redux/Features/ModalFeatures'

type Props = {
  children?: any
  ButtonNameOne?: string
  ButtonNameTwo?: string
  SuccessHandler?: any
  Title?: string
  Description?: string
}

const MainModal = ({
  children,
  ButtonNameOne,
  ButtonNameTwo,
  SuccessHandler,
  Title,
  Description,
}: Props) => {
  const dispatch = useDispatch()
  const { toggleModal } = useSelector((state: any) => state.MainModal)

  return (
    <div className="w-full h-screen fixed z-50 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: toggleModal !== '' ? 1 : 0,
          scale: toggleModal !== '' ? 1 : 0,
        }}
        exit={{
          opacity: toggleModal === '' ? 0 : 1,
          scale: toggleModal === '' ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="w-auto h-auto min-w-[350px] min-h-[150px] max-w-[750px] bg-white shadow-2xl  rounded-xl p-7 m-5"
      >
        <h1 className="text-2xl font-semibold">{Title}</h1>
        <p className="text-gray-500 mt-2">{Description}</p>
        {children}
        {ButtonNameOne && ButtonNameTwo ? (
          <div className="flex gap-5 mt-5">
            <button
              onClick={SuccessHandler}
              className="py-2 px-7 rounded-xl border-2 border-gray-400 hover:bg-blue-500 hover:text-white"
            >
              {ButtonNameOne}
            </button>
            <button
              onClick={() => dispatch(toogleReducer(''))}
              className="py-2 px-7 rounded-xl border-2 border-gray-400 bg-red-600 text-white hover:bg-red-700 "
            >
              {ButtonNameTwo}
            </button>
          </div>
        ) : null}
      </motion.div>
    </div>
  )
}

export default MainModal
