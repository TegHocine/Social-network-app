import {
  AiOutlinePicture,
  AiOutlinePlayCircle,
  AiOutlineEnvironment,
  AiOutlineCalendar
} from 'react-icons/ai'
import Avatar from '../avatar/Avatar'
import Button from '../button/Button'

import './ShareComp.scss'

const ShareComp = (): JSX.Element => {
  return (
    <div className='shareComp'>
      <Avatar image='/src/assets/profileImg.jpg' />
      <div className='share-wrapper'>
        <input type='text' placeholder="What's happening?" />
        <div className='share-actions'>
          <Button
            title='Photo'
            icon={<AiOutlinePicture />}
            alter
            onclick={() => console.log('hi')}
          />
          <Button
            title='Video'
            icon={<AiOutlinePlayCircle />}
            alter
            onclick={() => console.log('hi')}
          />
          <Button
            title='Location'
            icon={<AiOutlineEnvironment />}
            alter
            onclick={() => console.log('hi')}
          />
          <Button
            title='Schedule'
            icon={<AiOutlineCalendar />}
            alter
            onclick={() => console.log('hi')}
          />

          <Button title='Share' onclick={() => console.log('hi')} />
        </div>
      </div>
    </div>
  )
}

export default ShareComp
