import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
    //SearchQuery
    const [searchQuery, setSearchQuery] = useState("");
    //Suggestions
    const [suggestions, setSuggestions] = useState([]);
    //ShowSuggestions : this makes the search disable when we are not searching
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch()
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    //DeBouncing
    useEffect(()=>{
        const timer = setTimeout(()=>{getSearchQuery()}, 200);
        
        return()=>{
            clearTimeout(timer);
        }

    }, [searchQuery]);

    const getSearchQuery = async ()=>{
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);
    }

    return (
        
            <div className='sticky top-0 z-50 grid w-full grid-flow-col p-3 bg-white shadow-lg justify-stretch'>
                <div className='flex col-span-1'>
                    <img className='w-10 cursor-pointer' onClick={()=>{toggleMenuHandler()}} 
                    alt='Menu' src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'/>
                    <a href='/'>
                        <img className='h-8 pt-2' src="https://luxafor.com/wp-content/uploads/2024/09/YouTube_logo_2017-min-600x135.png" alt="" />
                    </a>
                </div >
                <div className='flex grid-flow-col'>
                    <div className=''>    
                        <input type="text" 
                            placeholder='Search' 
                            className='p-2 px-3 border border-gray-400 rounded-l-full w-[52rem] ' 
                            value={searchQuery}
                            onChange={(e)=>setSearchQuery(e.target.value)}
                            onFocus={()=>setShowSuggestions(true)}
                            onBlur={()=>setShowSuggestions(false)}
                        />
                        <button className='px-4 py-2 bg-gray-200 border border-gray-400 rounded-r-full'>🔍</button>    
                    
                    </div>
                    <div className='fixed   mt-10 bg-white rounded-t-2xl rounded-b-md w-[52rem] shadow-lg'>
                        <ul>
                            {showSuggestions && (suggestions.map((s)=>(
                                <li key={s} className='p-1 px-5 border-b-2 rounded-lg cursor-default hover:bg-gray-100 '>{s}</li>
                            )))}                            
                        </ul>
                    </div>
                </div>
                <div className='col-span-1 ml-auto'>
                    <img className='w-10 col-span-1' src="https://tse3.mm.bing.net/th/id/OIP.0LvP1YUJ2stgbrp2srwnFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                </div>
            </div>
            
    )
}

export default Head
