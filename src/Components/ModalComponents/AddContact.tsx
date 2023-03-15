import React from 'react'

type Props = {}

const AddContact = (props: Props) => {
  return (
    <div className="w-full mt-4">
      <input
        type="text"
        className="w-[300px] md:w-full p-3 border-2 focus:outline-none rounded-md"
        placeholder="Enter Contact Name....."
      />
      <input
        type="text"
        className="w-[300px] md:w-full p-3 border-2 focus:outline-none rounded-md mt-3"
        placeholder="Enter Contact Number....."
      />
    </div>
  )
}

export default AddContact
