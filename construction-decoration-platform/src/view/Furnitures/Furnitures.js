import React from 'react'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import ButtonFor from '../../components/Button/ButtonFor/ButtonFor'
import Furniture from '../../components/furniture/Furniture'
import "./Furnitures.scss"

function Furnitures() {
  return (
    <div className='furnitures'>
      <Header />
      <ButtonFor text="NỘI THẤT"/>

      <div className="furnitures_container">
        <h2>Ưu đãi khủng</h2>
        <Furniture />
        <h2>Nội thất bán chạy</h2>
        <Furniture />
      </div>
      <Footer />
    </div>
  )
}

export default Furnitures