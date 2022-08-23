import { Followers } from '../../Data/FollowersData'
import FollowersItem from '../followersItem/FollowersItem'
import './FollowersCard.scss'

const FollowersCard = () => {
  return (
    <div className='followersCard'>
      <h4>Who is following you</h4>
      {Followers?.map((follower) => (
        <FollowersItem key={follower.id} {...follower} />
      ))}
    </div>
  )
}

export default FollowersCard
