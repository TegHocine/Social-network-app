import { FaUser, FaRegUser } from 'react-icons/fa'
import { IoMdNotificationsOutline, IoMdNotifications } from 'react-icons/io'
import {
  RiTwitterFill,
  RiTwitterLine,
  RiChat1Fill,
  RiChat1Line
} from 'react-icons/ri'

import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navBar'>
      <a href='' title='Home'>
        <RiTwitterFill className='navItem' />
      </a>
      <a href='' title='Profile'>
        <FaRegUser className='navItem' />
      </a>
      <a href='' title='Messages'>
        <RiChat1Line className='navItem' />
      </a>

      <a href='' title='Notifications'>
        <IoMdNotificationsOutline className='navItem' />
      </a>
    </div>
  )
}

export default NavBar