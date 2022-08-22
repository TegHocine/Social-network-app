import ProfileSide from '../../components/ProfileSide/ProfileSide'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='profile-side'>
        <ProfileSide />
      </div>
      <div className='post-side'>post</div>
      <div className='right-side'>right</div>
    </div>
  )
}

export default Home
