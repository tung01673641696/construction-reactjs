import React from 'react'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import DesignContent from './DesignContent/DesignContent'
import ButtonFor from '../../components/Button/ButtonFor/ButtonFor'

function Design() {
  return (
    <div className='page-design'>
      <Header />
      <ButtonFor text={"THIẾT KẾ NỔI BẬT"}/>
      <DesignContent />
      <Footer />
    </div>
  )
}

export default Design
