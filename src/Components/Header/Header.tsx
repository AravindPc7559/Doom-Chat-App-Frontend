import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="w-full max-h-[200px] p-5 ">
      <h1 className="text-xl md:text-3xl font-light text-gray-600 font-sans">
        Welcome Back Aravind Pc
      </h1>
      <p className="text-md font-normal mt-2 text-gray-600 font-sans ">
        Ajith Suresh
      </p>
    </div>
  )
}

export default Header
