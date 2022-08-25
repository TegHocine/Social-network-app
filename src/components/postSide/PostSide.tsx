import NavBar from '../navBar/NavBar'
import Posts from '../posts/Posts'
import ShareComp from '../shareComp/ShareComp'
import './PostSide.scss'

const PostSide = (): JSX.Element => {
  return (
    <div className='postSide'>
      <ShareComp />
      <Posts />
      <NavBar className='fixed-navbar' />
    </div>
  )
}

export default PostSide
