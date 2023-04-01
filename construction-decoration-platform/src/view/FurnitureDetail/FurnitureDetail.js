import React from 'react'
import "./FurnitureDetail.scss"
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import ButtonFor from '../../components/Button/ButtonFor/ButtonFor'
import Furniture from '../../components/furniture/Furniture'
import FurnitureSlider from '../../components/FurnitureDetail/FurnitureSlider/FurnitureSlider'
import FurnitureContent from '../../components/FurnitureDetail/FurnitureContent/FurnitureContent'
import { productDetail } from '../../redux/reducers/product'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function FurnitureDetail() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const { detail } = useSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(productDetail(id))
  }, [id])
  
  console.log("id",id)


  return (
    <div className='fu_detail'>
      <Header />
      <ButtonFor text={"NỘI THẤT"}/>

      <div className='fu_detail_box'>
        <FurnitureSlider detail={detail}/>
        <FurnitureContent detail={detail}/>
      </div>

      <div className='fu_detail_same'>
        <h3>Nội thất liên quan</h3>
        <Furniture />
      </div>
      <Footer />
    </div>
  )
}

export default FurnitureDetail