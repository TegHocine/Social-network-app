import FollowersCard from '../followersCard/FollowersCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import SearchBar from '../searchBar/SearchBar'
import './ProfileSide.scss'

const ProfileSide = () => {
  return (
    <div className='profileSide'>
      <SearchBar />
      <ProfileCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide
