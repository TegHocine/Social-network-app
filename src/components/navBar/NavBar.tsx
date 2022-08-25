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
        className={({ isActive }) =>
          isActive ? 'active-nav' : 'inactive-nav'
        }>
        <RiTwitterFill className='active-navItem navItem ' />
        <RiTwitterLine className='inactive-navItem navItem ' />
      </NavLink>
      <NavLink
        to='/profile'
        title='Profile'
        className={({ isActive }) =>
          isActive ? 'active-nav' : 'inactive-nav'
        }>
        <FaUser className='active-navItem navItem' />
        <FaRegUser className='inactive-navItem navItem' />
      </NavLink>
      <NavLink
        to='!#'
        title='Messages'
        className={({ isActive }) =>
          isActive ? 'active-nav' : 'inactive-nav'
        }>
        <RiChat1Fill className='active-navItem navItem' />
        <RiChat1Line className='inactive-navItem navItem' />
      </NavLink>

      <NavLink
        to='!#'
        title='Notifications'
        className={({ isActive }) =>
          isActive ? 'active-nav' : 'inactive-nav'
        }>
        <IoMdNotifications className='active-navItem navItem' />
        <IoMdNotificationsOutline className='inactive-navItem navItem' />
      </NavLink>
    </div>
  )
}

export default NavBar
