import React from 'react'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import ButtonFor from '../../components/Button/ButtonFor/ButtonFor'
import SupplierInfo from '../../components/Supplier/SupplierInfo/SupplierInfo'
import ServiceTable from '../../components/Service/ServiceTable/ServiceTable'
import SupplierIntro from '../../components/Supplier/SupplierIntro/SupplierIntro'
import OutstandDesign from './OutstandDesign/OutstandDesign'
import "./SupplierDetail.scss"
import { useParams } from 'react-router-dom'
import { getOneSupplier } from '../../redux/reducers/supplier'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function SupplierDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { oneSupplier } = useSelector((state) => state.supplierReducer)
  useEffect(() => {
    dispatch(getOneSupplier(id))
  }, [])

  return (
    <div className='supplier-detail'>
      <SupplierInfo detail={oneSupplier}/>

      <div className='supplier-detail-box'>
        <h3>Giới thiệu chung</h3>
        <SupplierIntro detail={oneSupplier}/>
      </div>

      <div className='supplier-detail-box'>
        <h3>Một số thiết kế nổi bật</h3>
        <OutstandDesign />
      </div>

      <ButtonFor text="DỊCH VỤ XÂY DỰNG" />
      <ServiceTable />
    </div>
  )
}

export default SupplierDetail