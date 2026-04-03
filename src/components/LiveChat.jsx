import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName , generateRandomMessage} from '../utils/helper';
const LiveChat = () => {
  const [liveMessage , setLiveMessage]= useState("")
  const dispatch = useDispatch();
    const chatMessage = useSelector((store)=>store.chat.messages )
    console.log(chatMessage)
    useEffect(()=>{
        const i = setInterval(()=>{
            //API polling 
            dispatch(addMessage({
                name:generateRandomName(),
                message : generateRandomMessage(20)
            }));
        }, 2000);
        return ()=> clearInterval(i);
    }, [])

  return (
    <>
      <div className='w-full p-1 m-2 mt-0 h-[500px] border border-black bg-slate-100 rounded-sm overflow-y-scroll flex flex-col-reverse'>
        <div>
          {
            chatMessage.map((c, i)=><ChatMessage key={i} name={c.name} message={c.message} />)
          }
        </div>
      </div>
      <form className='flex ml-2 border border-black'
        onSubmit={(e)=>{
          e.preventDefault()
          dispatch(addMessage({
            name:"Shubham Hundalekar",
            message:liveMessage
          }))
          setLiveMessage("")
        }}
      >
        <input className='w-full p-1 ' type="text" value={liveMessage}  placeholder='Text here' onChange={(e)=>{
          setLiveMessage(e.target.value);
        }}/>
        <button type='submit'>💬</button>
      </form>
    </>
  )
}

export default LiveChat