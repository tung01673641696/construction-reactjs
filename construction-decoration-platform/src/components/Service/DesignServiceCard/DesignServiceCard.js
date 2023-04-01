import React from 'react'
import DesignService from "../../../assets/images/service/design-service.png"
import "./DesignServiceCard.scss"

function DesignServiceCard({item}) {
  return (
    <div className='design_service_card'>
      <div className='design_service_img'>
        <img src={DesignService} />
      </div>

      <div className='design_service_content'>
        <h4>{item.name}</h4>
        <p>Phong cách: <span>{item.style}</span></p>
        <p>Nhà cung cấp: <span>{item.supplier}</span></p>
        <p>Vị trí: <span>{item.address}</span></p>
        <p>Số điện thoại: <span>{item.telephone}</span></p>
        <button className='design_service_button'>Liên hệ</button>
      </div>
    </div>
  )
}

export default DesignServiceCard