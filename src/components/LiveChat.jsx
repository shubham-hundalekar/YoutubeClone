import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='w-full p-1 m-2 mt-0 h-[500px] border border-black bg-slate-100 rounded-sm'>
      <ChatMessage/>
    </div>
  )
}

export default LiveChat