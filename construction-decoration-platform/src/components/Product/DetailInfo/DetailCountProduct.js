import React from 'react'
import "./DetailInfo.scss"
import Cart from '../../../assets/images/product/Cart.svg'

function DetailCountProduct({quantity}) {
  return (
    <div className='detail-count-product'>
      <img src={Cart} alt=''/> 
      <p>Chỉ còn {quantity} sản phẩm. Chọn mua ngay!</p>
    </div>
  )
}

export default DetailCountProduct