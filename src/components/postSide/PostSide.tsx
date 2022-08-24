import Posts from '../posts/Posts'
import ShareComp from '../shareComp/ShareComp'
import './PostSide.scss'

const PostSide = (): JSX.Element => {
  return (
    <div className='postSide'>
      <ShareComp />
      <Posts />
    </div>
  )
}

export default PostSide
