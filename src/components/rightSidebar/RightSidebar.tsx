import SearchBar from '../searchBar/SearchBar'
import Trend from '../trend/Trend'
import './RightSidebar.scss'

const RightSide = () => {
  return (
    <div className='rightSide'>
      <SearchBar />
      <Trend />
    </div>
  )
}

export default RightSide
