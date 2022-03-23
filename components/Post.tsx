import React from 'react'

interface Props {
  name: string
  timestamp: string
  text: string
}

const Post: React.FC<Props> = ({ name, timestamp, text }: Props) => {
  const seed = Math.round(Math.random() * 100)
  return (
    <div className='post'>
      <div className='avatar-wrapper'>
        <img className='avatar' src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' />
      </div>
      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  )
}

export default Post