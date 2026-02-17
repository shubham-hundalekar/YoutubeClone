import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen) 
        return null;
  return (
    <div className='w-48 p-5 shadow-md'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul><header className='pt-4 font-bold'>Subscriptions</header>
        <ul>
            <li>Music</li>
            <li>Gaming</li>
            <li>Sports</li>
            <li>Movies</li>
        </ul>
        <header className='pt-4 font-bold'>Watch later</header>
        <ul>
            <li>Music</li>
            <li>Gaming</li>
            <li>Sports</li>
            <li>Movies</li>
        </ul>

    </div>
  )
}

export default Sidebar