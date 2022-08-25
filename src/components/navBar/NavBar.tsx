import { NavLink } from 'react-router-dom'

import { FaUser, FaRegUser } from 'react-icons/fa'
import { IoMdNotificationsOutline, IoMdNotifications } from 'react-icons/io'
import {
  RiTwitterFill,
  RiTwitterLine,
  RiChat1Fill,
  RiChat1Line
} from 'react-icons/ri'

import './NavBar.scss'

type NavBarProps = {
  className?: string
}

const NavBar = ({ className }: NavBarProps): JSX.Element => {
  return (
    <div className={`navBar ${className}`}>
      <NavLink
        to='/'
        title='Home'
        className={({ isActive }) => (isActive ? 'active-nav' : '')}>
        <RiTwitterFill className='navItem' />
      </NavLink>
      <NavLink to='/profile' title='Profile'>
        <FaRegUser className='navItem' />
      </NavLink>
      <NavLink to='!#' title='Messages'>
        <RiChat1Line className='navItem' />
      </NavLink>

      <NavLink to='!#' title='Notifications'>
        <IoMdNotificationsOutline className='navItem' />
      </NavLink>
    </div>
  )
}

export default NavBar
