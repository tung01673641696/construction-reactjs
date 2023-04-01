import React from 'react'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import ButtonFor from '../../components/Button/ButtonFor/ButtonFor'
import DesignService from '../../components/Service/DesignService/DesignService'
import "./ServiceDetail.scss"
import ServiceTable from "../../components/Service/ServiceTable/ServiceTable"

function ServiceDetail() {
  return (
    <div className='sevice-detail'>
      <Header />
      <ButtonFor text={"DỊCH VỤ PHỔ BIẾN"}/>
      <h2>Dịch vụ Thiết kế</h2>
      <DesignService />

      <h2>Dịch vụ Xây dựng - Sửa chữa</h2>
      <DesignService />

      <h2>Vật liệu xây dựng</h2>
      <DesignService />

      <ButtonFor text="Dịch vụ xây dựng"/>
      <ServiceTable />
      <Footer />
    </div>
  )
}

export default ServiceDetail
