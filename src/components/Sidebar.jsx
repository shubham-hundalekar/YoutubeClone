import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen) 
        return null;
  return (
    <div className='w-48 p-5 border border-r-2 border-gray-200 shadow-md '>
        <ul className=''>
            <li className='p-2 rounded-lg cursor-pointer hover:bg-gray-200'><Link to='/'>Home</Link></li>
            <li className='p-2 rounded-lg cursor-pointer hover:bg-gray-200'>Shorts</li>
            <li className='p-2 rounded-lg cursor-pointer hover:bg-gray-200 '>Videos</li>
            <li className='p-2 rounded-lg cursor-pointer hover:bg-gray-200'>Live</li>
        </ul><header className='pt-4 font-bold'>Subscriptions</header>
        <ul>
            <li className='p-2 rounded-lg cursor-pointer hover:bg-gray-200'>Music</li>
            <li className='p-2 rounded-lg cursor-pointer hover:bg-gray-200'>Gaming</li>
            <li className='p-2 rounded-lg cursor-pointer hover:bg-gray-200'>Sports</li>
            <li className='p-2 rounded-lg cursor-pointer hover:bg-gray-200'>Movies</li>
        </ul>
        <header className='pt-4 font-bold'>Watch later</header>
        <ul>
            <li className='p-2 rounded-lg hover:bg-gray-200'>Music</li>
            <li className='p-2 rounded-lg hover:bg-gray-200'>Gaming</li>
            <li className='p-2 rounded-lg hover:bg-gray-200'>Sports</li>
            <li className='p-2 rounded-lg hover:bg-gray-200'>Movies</li>
        </ul>

    </div>
  )
}

export default Sidebar