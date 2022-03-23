import React from 'react'
import { IconBaseProps } from 'react-icons'

interface Props {
  icon: IconBaseProps
  text?: string
}

const SideBarIcon: React.FC<Props> = ({ icon, text = 'tooltip 💡' }: Props) => {
  return (
    <div className='sidebar-icon group'>
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  )
}

export default SideBarIcon