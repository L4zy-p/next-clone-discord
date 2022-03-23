import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'

const BottomBar = () => {
  return (
    <div className='bottom-bar'>
      <BsPlusCircleFill size={22} className='text-green-500 mx-2 
      dark:shadow-lg dark:text-primary'/>
      <input type='text' className='bottom-bar-input' placeholder='Enter message'/>
    </div>
  )
}

export default BottomBar