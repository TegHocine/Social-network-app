import Logo from '../../assets/logo.png'
import { FaSearch } from 'react-icons/fa'

import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <img src={Logo} alt='' className='logo' />
      <div className='search-input'>
        <input type='text' placeholder='#Explore' />
        <div className='search-icon'>
          <FaSearch />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
