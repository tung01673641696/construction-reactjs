import React from 'react'
import './CardSupplier.scss'
import Banner from "../../../assets/images/supplier/banner.jpg"
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const CardSupplier = ({item}) => {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/supplier/${item.id}`)
    window.scrollTo(0,0)
  }

  return (
    <div className='card-supplier-item' >
      <div className='image-card'>
        <img src={Banner} alt="" />
      </div>
      <div className='card-content'>
        <div className='supplier-name'>{item?.company_name}</div>
        <div className='supplier-overlay'>{item?.address}</div>
        <div className='supplier-overlay'>{item?.phone}</div>
        <div className='supplier-overlay'>{item?.email}</div>
        <div className='supplier-decs'>{item?.des}</div>
        <button className='show-more' onClick={() => handleClick()}>Xem thêm</button>
      </div>
    </div>
  )
}

export default CardSupplier
