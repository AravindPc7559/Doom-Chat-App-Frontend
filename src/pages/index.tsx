import React from 'react'
import Tilt from 'react-parallax-tilt'

type Props = {}

const Home = (props: Props) => {
  const [toggleOptions, setToggleOptions] = React.useState(false)
  return (
    <div className="w-full h-screen bg-gray-400 p-5 flex justify-center items-center bg-gradient-to-b from-[#eb5858] to-white">
      <Tilt
        className=""
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.75}
        glarePosition="all"
        scale={1.02}
        trackOnWindow={true}
      >
        <div className="shadow-2xl bg-white min-w-[350px] max-h-[400px] rounded-xl p-6">
          <h1 className="text-center font-semibold text-2xl">Authentication</h1>
          {toggleOptions && (
            <>
              <input
                type="text"
                className="focus:outline-none w-full p-2 border-2 border-gray-400 rounded-lg mt-4"
                placeholder="Enter you name..."
              />
              <input
                type="text"
                className="focus:outline-none w-full p-2 border-2 border-gray-400 rounded-lg mt-4"
                placeholder="Enter you number..."
              />
            </>
          )}
          <input
            type="text"
            className="focus:outline-none w-full p-2 border-2 border-gray-400 rounded-lg mt-4"
            placeholder="Enter you email address..."
          />

          <input
            type="text"
            className="focus:outline-none w-full p-2 border-2 border-gray-400 rounded-lg mt-4"
            placeholder="Enter you password..."
          />
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 hover:text-white">
              Submit
            </button>
          </div>
          <p
            onClick={() => setToggleOptions(!toggleOptions)}
            className="text-center mt-3 text-gray-500 cursor-pointer hover:text-gray-600"
          >
            {!toggleOptions
              ? 'Create a new account!'
              : 'Already have an account? Log in!'}
          </p>
        </div>
      </Tilt>
    </div>
  )
}

export default Home
