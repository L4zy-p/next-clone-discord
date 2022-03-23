import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Sidebar, ChannelBar, ContentContainer } from '../components'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col w-full'>
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  )
}

export default Home
