import React from 'react'
import service from "../../../assets/images/service/service.png"
import "./CardService.scss"
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CardService({item}) {
  const Navigate = useNavigate()

  function handleClick() {
    Navigate("/service-detail")
    window.scrollTo(0,0)
  }

  return (
    <div className='service_card'>
        <div className='service_img'>
          <img src={service} alt='' />
        </div>
        <div className='service_content'>
            <h3>{item.title}</h3>
            <span className='service_content_text'>{item.content}</span>
            
            <span className='service_detail' onClick={() => handleClick()}>Chi tiết dịch vụ</span> 
        </div>
    </div>
  )
}

export default CardService
