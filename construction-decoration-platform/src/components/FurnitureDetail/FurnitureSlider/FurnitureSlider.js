import React, { useState, useEffect } from 'react'
import "./FurnitureSlider.scss"
import ImgSmall1 from "../../../assets/images/furniture/img_small1.png"
import ImgSmall2 from "../../../assets/images/furniture/img_small2.png"
import ImgSmall3 from "../../../assets/images/furniture/img_small3.png"
import ImgLarge from "../../../assets/images/furniture/img_large.png"

function FurnitureSlider({ detail }) {
  const [image, setImage] = useState()

  console.log('detail', detail)

  useEffect(() => {

    setImage(detail?.image_url?.map((imageItem, index) => {
      if (index === 0) {
        return {
          ...imageItem,
          active: true
        }
      } else {
        return {
          ...imageItem,
          active: false
        }
      }
    }))
  }, [detail])

  console.log("image", image)

  const onChangeImage = (imageData) => {
    setImage(image?.map(imageItem => {
      if (imageItem.id === imageData.id) {
        return {
          ...imageItem,
          active: true
        }
      } else {
        return {
          ...imageItem,
          active: false
        }
      }
    }))
  }

  return (
    <div className='fu_slider'>
      <div className='fu_slider_small'>
        {
          image?.map((item) => (
            <img src={`${process.env.REACT_APP_API_URL}/${item.url}`}
              onClick={() => onChangeImage(item)}
            />
          ))
        }
      </div>
      <div className='fu_slider_large'>
        {
          image?.map((imageItem) => {
            if(imageItem.active) {
              return <img src={`${process.env.REACT_APP_API_URL}/${imageItem.url}`} />
            } else {
              return ""
            }
          })
        }
      </div>
    </div>
  )
}

export default FurnitureSlider
