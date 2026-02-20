import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'
const WatchPage = () => {
    //they are not normal params they are search params so we have to use useSearchParams() to access the params
    const [searchParams]= useSearchParams()
    console.log(searchParams.getAll("v"));
    const dispatch = useDispatch(); 
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='px-16'>
        <iframe width="1200" 
        height="600" 
        src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage