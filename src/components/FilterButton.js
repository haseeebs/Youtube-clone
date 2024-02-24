import React from 'react'

const FilterButton = ({name}) => {
  return (
    <div className='bg-gray-100 text-sm px-3 py-2 m-1.5 rounded-md hover:bg-gray-200 cursor-pointer select-none whitespace-nowrap'>{name}</div>
  )
}

export default FilterButton