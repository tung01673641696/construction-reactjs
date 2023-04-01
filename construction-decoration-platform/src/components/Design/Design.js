import React from 'react'
import CardDesign from './CardDesign/CardDesign'
import "./Design.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Design() {
  const navigate = useNavigate()

  function handleClick() {
    navigate("/design")
    window.scrollTo(0,0)
  }

  const data = [
    {
      id: "1",
      title: "PHONG CÁCH THIẾT KẾ NỘI THẤT CỔ ĐIỂN"
    },
    {
      id: "2",
      title: "PHONG CÁCH THIẾT KẾ NỘI THẤT RUSTIC"
    },
    {
      id: "3",
      title: "PHONG CÁCH NỘI THẤT HIỆN ĐẠI"
    },
    {
      id: "4",
      title: "NỘI THẤT PHONG CÁCH HITECH"
    },
    {
      id: "5",
      title: "PHONG CÁCH THIẾT KẾ ĐỒNG QUÊ"
    },
    {
      id: "6",
      title: "PHONG CÁCH THIẾT KẾ NỘI THẤT BẮC ÂU"
    },
  ]

  return (
    <div className='design'>
      <div className='design_box'>
        {data?.map((item, index) =>(
          <CardDesign item={item}/>
        ))}
      </div>

      <div className='design_link'
        onClick={() => handleClick()}
      >
        Xem Thêm
      </div>
    </div>
  )
}

export default Design
