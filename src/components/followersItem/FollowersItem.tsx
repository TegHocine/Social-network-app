import Avatar from '../avatar/Avatar'
import Button from '../button/Button'
import './FollowersItem.scss'

type FollowersItemProps = {
  name: string
  username: string
  img: string
}

const FollowersItem = ({
  name,
  username,
  img
}: FollowersItemProps): JSX.Element => {
  return (
    <div className='followersItem'>
      <div className='follower'>
        <Avatar image={img} />
        <div className='follower-name'>
          <span>{name}</span>
          <span>@{username}</span>
        </div>
      </div>
      <Button title='Follow' onclick={() => console.log('hi')} />
    </div>
  )
}

export default FollowersItem
