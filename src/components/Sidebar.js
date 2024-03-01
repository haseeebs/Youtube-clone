import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const location = useLocation();

  const isWatchScreen = location.pathname === '/watch';

  const sidebarStyles = isWatchScreen ? 'w-60 fixed z-10 bg-white shadow-2xl p-4 rounded-2xl' : 'shadow-xl p-4';

  if (!isMenuOpen) return null;

  return (
    <div className={sidebarStyles}>
      <Link to={'/'}><h3 className='p-3 w-52 rounded-md hover:bg-gray-300 cursor-pointer select-none font-bold bg-gray-200'>Home</h3></Link>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>Subscription</h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>You</h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>History</h3>

      <h3 className='p-3 w-52 rounded-md select-none'><strong>Explore</strong></h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>Trending</h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>Shopping</h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>Music</h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>Movies</h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>Live</h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>Gaming</h3>
      <h3 className='p-3 w-52 rounded-md hover:bg-gray-100 cursor-pointer select-none'>News</h3>
    </div>
  )
}

export default Sidebar