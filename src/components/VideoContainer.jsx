import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(()=>{
        getVideos();
    }, []);

    const getVideos = async ()=>{
        const  data = await fetch(YOUTUBE_VIDEOS_API);
        const json  = await data.json();
        setVideos(json.items);
    }
  return (
    <div className='flex flex-wrap justify-evenly'>
      {videos.map((info)=>(<VideoCard key={info.id} info={info}/>))}
    </div>
  )
}

export default VideoContainer