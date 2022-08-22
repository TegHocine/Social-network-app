import Cover from '../../assets/cover.jpg'
import Avatar from '../../assets/profileImg.jpg'

import './ProfileCard.scss'

const ProfileCard = () => {
  return (
    <div className='profileCard'>
      <div className='profile-image'>
        <img src={Cover} alt='' />
        <img src={Avatar} alt='' />
      </div>
      <div className='profile-name'>
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className='profile-status'>
        <hr />
        <div>
          <div className='follow'>
            <span>6,080</span>
            <span>Followers</span>
          </div>
          <div className='vertical-line'></div>
          <div className='follow'>
            <span>6</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  )
}

export default ProfileCard
