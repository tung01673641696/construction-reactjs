import React from 'react'
import DesignServiceCard from '../DesignServiceCard/DesignServiceCard'
import "./DesignService.scss"

function DesignService() {
  const data = [
    {
      id: 1,
      name: "Thiết kế nội thất chung cư tối giản",
      style: "Hiện đại",
      supplier: "Nội Thất Trúc Linh - Công Ty CP Đầu Tư Trúc Linh",
      address: "Hòa Bình",
      telephone: "0339160077"
    },
    {
      id: 2,
      name: "Thiết kế nhà ở khu ngoại ô khu vực Hà Nội",
      style: "Hiện đại, Tân cổ điển, Châu âu,...",
      supplier: "Nội Thất Trúc Linh - Công Ty CP Đầu Tư Trúc Linh",
      address: "Hà Nội",
      telephone: "0339160077"
    },
    {
      id: 3,
      name: "Thiết kế nội thất chung cư tối giản",
      style: "Hiện đại",
      supplier: "Nội Thất Trúc Linh - Công Ty CP Đầu Tư Trúc Linh",
      address: "Hòa Bình",
      telephone: "0339160077"
    },
    {
      id: 4,
      name: "Thiết kế nội thất chung cư tối giản",
      style: "Hiện đại",
      supplier: "Nội Thất Trúc Linh - Công Ty CP Đầu Tư Trúc Linh",
      address: "Hải Dương",
      telephone: "0339160077"
    }
  ]

  return (
    <div className='design-service-box'>
      {data.map((item,index) => (
        <DesignServiceCard item={item}/>
      ))}

    </div>
  )
}

export default DesignService
