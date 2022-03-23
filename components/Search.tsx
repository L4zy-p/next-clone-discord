import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search' />
      <FaSearch size={18} className='text-secondary my-auto' />
    </div>
  )
}

export default Search