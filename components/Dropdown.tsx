import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import ChevronIcon from './ChevronIcon'
import TopicSelection from './TopicSelection'

interface Props {
  header: string,
  selections: any[]
}

const Dropdown: React.FC<Props> = ({ header, selections }: Props) => {
  const [expended, setExpended] = useState(true)

  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={() => setExpended(!expended)}>
        <ChevronIcon expended={expended} />
        <h5 className={expended ? 'dropdown-header-text-selected select-none' : 'dropdown-header-text select-none'}>{header}</h5>
        <FaPlus size={12} className='text-opacity-80 my-auto ml-auto' />
      </div>
      {
        expended && selections?.map((selection,index) => <TopicSelection key={index} selection={selection} />)
      }
    </div>
  )
}

export default Dropdown