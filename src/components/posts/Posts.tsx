import { PostsData } from '../../Data/PostsData'
import PostItem from '../postItem/PostItem'
import './Posts.scss'

const Posts = () => {
  return (
    <div className='posts'>
      {PostsData.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Posts
