import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { MdModeEdit } from 'react-icons/md'

import Cover from '../../assets/cover.jpg'
import Avatar from '../../assets/profileImg.jpg'
import Button from '../button/Button'

import './ProfileCard.scss'

const ProfileCard = () => {
  const { pathname } = useLocation()
  console.log(pathname)
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
          {pathname === '/profile' && (
            <>
              <div className='vertical-line'></div>
              <div className='follow'>
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {pathname === '/profile' ? (
        <Button
          className='link'
          icon={<MdModeEdit />}
          alter
          title='Edit profile'
          onclick={() => console.log('hi')}
        />
      ) : (
        <Link to='/profile' className='link'>
          My Profile
        </Link>
      )}
    </div>
  )
}

export default ProfileCard
