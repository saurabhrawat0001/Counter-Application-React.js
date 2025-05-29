import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='min-h-screen min-w-screen bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-4xl font-semibold text-black bg-gradient-to-r from-blue-500 to-indigo-700 shadow-lg py-2 px-4 rounded-2xl'>Counter</h1>
        <h2 className='my-10 text-6xl font-semibold text-gray-200'>{count}</h2>
        <div>
          <button className='font-semibold text-4xl bg-gradient-to-r from-blue-500 to-indigo-700 shadow-lg text-black w-20 h-20 rounded-full' onClick={()=>setCount(count-1)}>-</button>
          <button className='font-semibold text-4xl bg-gradient-to-r from-blue-500 to-indigo-700 shadow-lg text-black w-20 h-20 rounded-full mx-10' onClick={()=>setCount(0)}>0</button>
          <button className='font-semibold text-4xl bg-gradient-to-r from-blue-500 to-indigo-700 shadow-lg text-black w-20 h-20 rounded-full' onClick={()=>setCount(count+1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App