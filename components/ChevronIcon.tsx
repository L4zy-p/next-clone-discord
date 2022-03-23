import React from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

interface Props {
  expended: boolean
}

const ChevronIcon = ({ expended }: Props) => {
  const className = 'text-opacity-80 my-auto mr-1'
  return expended
    ? <FaChevronDown size={14} className={className} />
    : <FaChevronRight size={14} className={className} />
}

export default ChevronIcon