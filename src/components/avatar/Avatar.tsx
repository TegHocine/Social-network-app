import './Avatar.scss'

type avatarProps = {
  image: string
}

const Avatar = ({ image }: avatarProps): JSX.Element => {
  return <img src={image} alt='avatar' className='avatar' />
}

export default Avatar
