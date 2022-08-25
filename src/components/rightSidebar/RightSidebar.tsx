import SearchBar from '../searchBar/SearchBar'
import ShareComp from '../shareComp/ShareComp'
import Trend from '../trend/Trend'
import './RightSidebar.scss'

const RightSide = () => {
  return (
    <div className='rightSide'>
      <SearchBar />
      <Trend />
      <ShareComp modal />
    </div>
  )
}

export default RightSide
