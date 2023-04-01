import React, { useEffect, useState } from 'react'
import "./DesignStyle.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DesignStyle1 from "../../../assets/images/design/DesignDetail/designstyle1.png"
import DesignStyle2 from "../../../assets/images/design/DesignDetail/designstyle2.png"
import DesignStyle3 from "../../../assets/images/design/DesignDetail/designstyle3.png"
import DesignStyle4 from "../../../assets/images/design/DesignDetail/designstyle4.png"

function DesignStyle() {
  const [image, setImage] = useState()

  const images = [
    {
      id: 1,
      url: "/upload/uploads/1674007330326cacbannenbotriphongkhachmotcachkhoahoc.jpg"
    },
    {
      id: 2,
      url: "/upload/uploads/1674007371766HINH2.jpg"
    },
    {
      id: 3,
      url: "/upload/uploads/1674007392888mautrangtriphongkhachdephungphatsaigon8.jpg"
    },
    {
      id: 4,
      url: "/upload/uploads/1674007406437ytuongthietkenoithatphongkhachbietthu1.jpg"
    }
  ]

  useEffect(() => {
    setImage(images?.map((imageItem, index) => {
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
  }, [])

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


  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='design-style'>
      <div className='design-style-select'>
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

      <Slider {...settings}>
        {
          image?.map((item) => (
            <img src={`${process.env.REACT_APP_API_URL}/${item.url}`}
              onChange={() => onChangeImage(item)}
            />
          ))
        }
      </Slider>
    </div>
  )
}

export default DesignStyle
