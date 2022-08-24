import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt
} from 'react-icons/ai'

import './PostItem.scss'

type PostItemProps = {
  img: string
  name: string
  desc: string
  likes: number
  liked: boolean
}

const PostItem = ({ img, name, desc, likes, liked }: PostItemProps) => {
  return (
    <div className='postItem'>
      <img src={img} alt='' />

      <div className='postReact'>
        {liked ? (
          <AiFillHeart title='Like' className='postReact__likes' />
        ) : (
          <AiOutlineHeart title='Like' className='postReact__likes' />
        )}
        <AiOutlineComment title='Reply' className='postReact__reply' />
        <AiOutlineShareAlt title='Share' className='postReact__share' />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>

      <div className='detail'>
        <span>
          <b>@{name}</b>
        </span>
        <span> {desc}</span>
      </div>
    </div>
  )
}

export default PostItem
