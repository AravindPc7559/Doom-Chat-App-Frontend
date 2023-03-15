import { openSideBar } from '@/Redux/Features/SideBarFeature'
import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import { useDispatch } from 'react-redux'

type Props = {}

const ResponsiveHeader = (Props: Props) => {
  const dispatch = useDispatch()
  return (
    <div
      className={`bg-[#eb5858] min-w-full rounded-b-3xl h-[80px] fixed top-0 flex justify-between items-center px-9`}
    >
      <div>Logo</div>
      <div className="text-3xl text-white">
        <GoThreeBars onClick={() => dispatch(openSideBar(false))} />
      </div>
    </div>
  )
}

export default ResponsiveHeader
