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

type ShareCompProps = {
  modal?: boolean
}

const ShareComp = ({ modal = false }: ShareCompProps): JSX.Element => {
  const [image, setImage] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
  return modal ? (
    <>
      {
        <Button
          title='Share'
          className={'share-modal-button '}
          onclick={() => setIsOpen(true)}
        />
      }
      <div className={`modal ${isOpen && 'active'}`}>
        <button
          className='close-modal-area'
          onClick={() => setIsOpen(false)}></button>
        <div className={`shareComp share-modal`}>
          <Button
            title='X'
            className='share-close-button'
            onclick={() => setIsOpen(false)}
          />
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

              <Button
                title='Share'
                className='share-button'
                onclick={() => console.log('hi')}
              />
            </div>
            <div style={{ display: 'none' }}>
              <input
                type='file'
                name='myImage'
                ref={imageRef}
                onChange={(e) => onImageChange(e)}
              />
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
      </div>
    </>
  ) : (
    <div className={`shareComp`}>
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

          <Button
            title='Share'
            onclick={() => console.log('hi')}
            className='share-button'
          />
        </div>
        <div style={{ display: 'none' }}>
          <input
            type='file'
            name='myImage'
            ref={imageRef}
            onChange={(e) => onImageChange(e)}
          />
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
