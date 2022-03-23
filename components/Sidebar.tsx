import React from 'react'
import { BsPlug, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

import SideBarIcon from './SideBarIcon'

const Sidebar: React.FC = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0
    flex flex-col bg-white dark:bg-gray-900
    shadow-lg text-lg'>
      <SideBarIcon icon={<FaFire/>} />
      <SideBarIcon icon={<BsPlug/>} text='tooltip'/>
      <SideBarIcon icon={<BsFillLightningFill/>} text='tooltip'/>
      <SideBarIcon icon={<BsGearFill/>} text='tooltip'/>
      <SideBarIcon icon={<FaPoo/>} text='tooltip'/>
    </div>
  )
}

export default Sidebar