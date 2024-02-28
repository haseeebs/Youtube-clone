import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if (!isMenuOpen) return (
    <div className='shadow-xl px-3 py-4 h-screen'>
      <Link to={'/'}><h3 className='p-2 w-28 rounded-md hover:bg-gray-300 cursor-pointer text-sm select-none font-bold bg-gray-200'>Home</h3></Link>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>Subscription</h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>You</h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>History</h3>

      <h3 className='p-2 w-28 rounded-md text-sm select-none'><strong>Explore</strong></h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>Trending</h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>Shopping</h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>Music</h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>Movies</h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>Live</h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>Gaming</h3>
      <h3 className='p-2 w-28 rounded-md hover:bg-gray-100 cursor-pointer text-sm select-none'>News</h3>
    </div>
  );

  return (
    <div className='shadow-xl p-4'>
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