import React, { useEffect } from 'react'
import "./MaterialDetail.scss"
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import ButtonFor from '../../components/Button/ButtonFor/ButtonFor'
import MaterialSlider from '../../components/MaterialDetail/MaterialSlider/MaterialSlider'
import MaterialContent from '../../components/MaterialDetail/MaterialContent/MaterialContent'
import Material from '../../components/Material/Material'

function MaterialDetail() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className='material_detail'>
      <Header />
      <ButtonFor text="VẬT LIỆU XÂY DỰNG" />

      <div className='material_detail_box'>
        <MaterialSlider />
        <MaterialContent />
      </div>

      <div className='material_detail_same'>
        <h3>Vật liệu xây dựng liên quan</h3>
        <div className='material_detail_same_ele'>
          <Material />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MaterialDetail
