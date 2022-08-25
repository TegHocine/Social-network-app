import { useState } from 'react'
import Button from '../button/Button'

import './ProfileInfo.scss'

const ProfileInfo = () => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className='profileInfo'>
      <div className='infoHead'>
        <h4>Your Info</h4>
      </div>

      <div className='info'>
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className='info'>
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className='info'>
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>

      <Button title='Logout' onclick={() => console.log('hi')} />
    </div>
  )
}

export default ProfileInfo
