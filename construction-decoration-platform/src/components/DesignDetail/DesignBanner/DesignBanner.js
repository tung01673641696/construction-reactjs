import React from 'react'
import Banner from "../../../assets/images/design/banner.png"
import "./DesignBanner.scss"

function DesignBanner() {
  return (
    <div className='design_banner'>
      <img src={Banner}/>

      <div className='design_banner_content'>
        <span>Thiết kế nội thất căn hộ Hawai quận 2 TP Hồ Chí Minh</span>
        <p>Để mỗi ngày được sống đúng và đầy đủ trong tâm hồn. Vì chúng tôi hiểu rõ, mục đích cuối cùng cho những cố gắng để giúp bản thân hạnh phúc hơn!</p>
      </div>
    </div>
  )
}

export default DesignBanner
