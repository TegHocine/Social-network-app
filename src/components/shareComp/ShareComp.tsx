import { useState, useRef } from 'react'
import {
  AiOutlinePicture,
  AiOutlinePlayCircle,
  AiOutlineEnvironment,
  AiOutlineCalendar
} from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import Avatar from '../avatar/Avatar'
import Button from '../button/Button'

import './ShareComp.scss'

const ShareComp = (): JSX.Element => {
  const [image, setImage] = useState<string>('')
  const imageRef = useRef<HTMLInputElement>(null)

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(URL.createObjectURL(img))
    }
  }

  const deleteImage = () => {
    setImage('')
  }
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
            onclick={() => imageRef?.current?.click()}
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
          <div style={{ display: 'none' }}>
            <input
              type='file'
              name='myImage'
              ref={imageRef}
              onChange={(e) => onImageChange(e)}
            />
          </div>
        </div>
        {image ? (
          <div className='previewImage'>
            <img src={image} alt='' />
            <div className='delete-image' onClick={deleteImage}>
              <MdDeleteForever />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ShareComp
