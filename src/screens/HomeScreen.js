import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContainer from '../components/MainContainer'

const HomeScreen = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default HomeScreen