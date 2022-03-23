import React from 'react'
import { BsHash } from 'react-icons/bs'

interface Props {
  selection: string
}

const TopicSelection: React.FC<Props> = ({ selection }: Props) => {
  return (
    <div className='dropdown-selection'>
      <BsHash size={24} className='text-gray-400'/>
      <h5 className='dropdown-selection-text select-none'>{selection}</h5>
    </div>
  )
}

export default TopicSelection