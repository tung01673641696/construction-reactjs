import React from 'react'
import "./BannerCategory.scss"
import bannercate from '../../../assets/images/home/imagecate.jpg'

function BannerCategory() {
  return (
    <div className='banner-cate'>
        <img src={bannercate} alt=''/>
    </div>
  )
}

export default BannerCategory