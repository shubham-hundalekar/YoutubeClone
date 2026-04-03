import React, { useEffect } from 'react'


const ChatMessage = ({name, message}) => {

  return (
    <div className='flex items-center p-2'>
        <div >
            <img className='w-8 col-span-1' src="https://tse3.mm.bing.net/th/id/OIP.0LvP1YUJ2stgbrp2srwnFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
        <span className='px-2 font-bold' >{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage