import React from 'react'

const discussion = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="input.css" />
  <title>Discussion</title>
  <div className="flex w-full max-w-6xl h-[90vh] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <div className="w-full sm:w-1/3 bg-gray-700 text-gray-200 flex flex-col">
      <header className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
        <h3 className="text-lg font-semibold">Chat</h3>
        <div className="flex items-center space-x-2">
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full" />
          <span className="text-sm text-gray-300">ONLINE (7)</span>
        </div>
      </header>
      <div className="p-2 bg-gray-700 flex">
        <img className="px-1" src="search.svg" alt="...." />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-600 text-gray-300 px-3 py-1 rounded focus:outline-none"
        />
      </div>
      <div className="h-[40rem] overflow-y-scroll">
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-green-300 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-green-300 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-green-300 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-green-300 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-green-300 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-green-300 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer   border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="/utils/happy.png"
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className=" py-2 space-x-2 flex justify-center items-center">
                <span className="font-semibold">NAME</span>
                <div className="w-2 h-2 bg-green-300 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-sm:hidden flex-1 flex flex-col bg-gray-900 text-gray-200">
      <div className="p-4 border-b border-gray-700 flex items-center space-x-2">
        <span className="w-3 h-3 bg-blue-500 rounded-full" />
        <p className="font-semibold">NAME</p>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex">
          <div className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg rounded-tl-none max-w-xs">
            Hello CodeZero
            <div className="text-xs text-gray-400 text-right mt-1">time</div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg rounded-tr-none max-w-xs">
            Good Morning!!
            <div className="text-xs text-gray-200 text-right mt-1">time</div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white px-5 py-2 rounded-lg rounded-tr-none max-w-xs">
            Code Zero is a dynamic technical club dedicated to fostering
            innovation and collaboration in coding, AI/ML, and software
            development. We aim to empower students through hands-on projects,
            workshops, and a vibrant tech community.
            <div className="text-xs text-gray-200 text-right mt-1">time</div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-700 flex items-center space-x-2">
        <button className="text-gray-400 hover:text-gray-300">
          <img className="w-7 h-7" src="/utils/happy.png" alt="" />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-700 text-white p-2 rounded-lg focus:outline-none"
        />
        <img className="w-4 h-4" src="plusicon.svg" alt=".." />
        <img className="w-6 h-6" src="voiceicon.svg" alt=".." />
      </div>
    </div>
  </div>
</>

  )
}

export default discussion