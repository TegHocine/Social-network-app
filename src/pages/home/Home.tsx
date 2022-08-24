import PostSide from '../../components/postSide/PostSide'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/rightSidebar/RightSidebar'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <LeftSidebar />
      <PostSide />
      <RightSidebar />
    </div>
  )
}

export default Home
