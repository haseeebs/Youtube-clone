import React from 'react'
import FilterButton from './FilterButton'

const filter = ['All', 'Music', 'News', 'Lo-fi', 'Naats', 'Live', 'Gaming', 'Nasheeds' , 'Cricket' , 'Cooking' , 'Podcasts' , 'History' , 'Rescently upload']

const ButtonList = () => {
  return (
    <div className='flex ml-5'>
      {filter.map((name , index) => (
        <FilterButton key={index} name={name} />
      ))}
    </div>
  )
}

export default ButtonList