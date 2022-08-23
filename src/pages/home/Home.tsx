import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <ProfileSide />
      <PostSide />
      <div className='right-side'>right</div>
    </div>
  )
}

export default Home
