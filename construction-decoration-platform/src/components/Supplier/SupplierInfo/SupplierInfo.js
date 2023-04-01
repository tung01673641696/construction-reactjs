import React from 'react'
import Avatar from '../../../assets/images/supplier/banner.jpg'
import "./SupplierInfo.scss"

function SupplierInfo({detail}) {
  return (
    <div className='supplier_info'>
      <div className='supplier_info_img'>
        <img src={Avatar} alt="" />
      </div>
      <div className='supplier_info_content'>
        <div className='supplier_info_name'>
          {detail.company_name}
        </div>
        <div className='supplier_info_item'>
          {detail.address}
        </div>
        <div className='supplier_info_item'>
          Điện thoại: {detail.phone}
        </div>
        <div className='supplier_info_item supplier_info_email'>
          {detail.email}
        </div>
      </div>
    </div>
  )
}

export default SupplierInfo
