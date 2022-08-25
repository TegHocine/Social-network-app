import ShareComp from '../../components/shareComp/ShareComp'
import Posts from '../../components/posts/Posts'
import NavBar from '../../components/navBar/NavBar'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import FollowersCard from '../../components/followersCard/FollowersCard'
import SearchBar from '../../components/searchBar/SearchBar'
import Trend from '../../components/trend/Trend'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='leftSidebar'>
        <NavBar />
        <ProfileCard />
        <FollowersCard />
      </div>

      <div className='middleSide'>
        <ShareComp />
        <Posts />
        <NavBar className='fixed-navbar' />
      </div>

      <div className='rightSidebar'>
        <SearchBar />
        <Trend />
        <ShareComp modal />
      </div>
    </div>
  )
}

export default Home
