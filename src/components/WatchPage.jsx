import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import ChannelDisplay from './ChannelDisplay'
import LiveChat from './LiveChat'
const WatchPage = ({id}) => {
    //they are not normal params they are search params so we have to use useSearchParams() to access the params
    const [searchParams]= useSearchParams()
    const [channelData, setChannelData]=useState()
    const dispatch = useDispatch(); 
    useEffect(()=>{
        dispatch(closeMenu());
    },[])

    useEffect(()=>{
      getChannelData();if(channelData){
        const {channelTitle, title } = channelData.snippet
        console.log(channelTitle," ", title);
      }
    }, [])
    const getChannelData = async ()=>{
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json  = await data.json();
      const channelInfo = json.items.find((item) => {
        if(item.id === searchParams.get("v")){
          return item;
        }       
      });
      setChannelData(channelInfo)
      console.log("channeldata ", channelInfo)
      
    }
    
  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full px-16'>
          <div>
            <iframe width="1000" 
            height="500" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
            {channelData !==undefined ? <ChannelDisplay channelData = {channelData}/>: null}
          </div>
          <div className='w-full'>
            <LiveChat/>
          </div>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage