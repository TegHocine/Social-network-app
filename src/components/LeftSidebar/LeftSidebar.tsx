import FollowersCard from '../followersCard/FollowersCard'
import NavBar from '../navBar/NavBar'
import ProfileCard from '../ProfileCard/ProfileCard'
import './LeftSidebar.scss'

const ProfileSide = () => {
  return (
    <div className='profileSide'>
      <NavBar />
      <ProfileCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide
