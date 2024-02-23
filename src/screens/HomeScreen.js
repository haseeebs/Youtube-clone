import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContainer from '../components/MainContainer'

const HomeScreen = () => {
  return (
    <div className='flex bg-blue-200'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default HomeScreen