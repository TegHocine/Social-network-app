import { FaSearch } from 'react-icons/fa'

import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='searchBar'>
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
