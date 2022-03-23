import React from 'react'
import dynamic from 'next/dynamic'
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa'


import Search from './Search'
const ThemeIcon = dynamic(
  () => import('./ThemeIcon'),
  { ssr: false }
)

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
      <FaHashtag size={20} className='title-hashtag' />
      <h5 className='title-text'>tailwind-css</h5>
      <ThemeIcon />
      <Search />
      <FaRegBell size={24} className='top-navigation-icon'/>
      <FaUserCircle size={24} className='top-navigation-icon'/>
    </div>
  )
}

export default TopNavigation