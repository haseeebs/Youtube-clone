import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../slices/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col px-6 py-2 items-center'>

      <div className='flex col-span-1 gap-5 items-center'>
        <div className="h-full p-2 rounded-full cursor-pointer hover:bg-slate-200" onClick={handleMenuToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
        </div>

        <img className='h-5 select-none' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU" alt="" />
      </div>

      <div className='col-span-9 flex items-center select-none'>
        <input type="text" placeholder='Search' className='px-2.5 py-2 w-1/2 rounded-l-3xl border border-gray-300' />
        <button className='h-10.5 bg-slate-100 px-5 py-2 rounded-r-3xl border border-gray-300'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
        </button>
      </div>

      <div className='col-span-2'>
        <div className="h-6">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c4.96 0 9 4.04 9 9 0 1.42-.34 2.76-.93 3.96-1.53-1.72-3.98-2.89-7.38-3.03A3.996 3.996 0 0016 9c0-2.21-1.79-4-4-4S8 6.79 8 9c0 1.97 1.43 3.6 3.31 3.93-3.4.14-5.85 1.31-7.38 3.03C3.34 14.76 3 13.42 3 12c0-4.96 4.04-9 9-9zM9 9c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 12c-3.16 0-5.94-1.64-7.55-4.12C6.01 14.93 8.61 13.9 12 13.9c3.39 0 5.99 1.03 7.55 2.98C17.94 19.36 15.16 21 12 21z"></path></svg>
        </div>
      </div>

    </div>
  )
}

export default Header