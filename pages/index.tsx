import type { NextPage } from 'next'
import { Sidebar, ChannelBar, ContentContainer } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  )
}

export default Home
