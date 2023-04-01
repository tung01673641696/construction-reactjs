import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../view/layouts/footer/Footer'
import Header from '../../view/layouts/header/Header'
import './Furniture.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react'
import ProjectAll from '../../view/construction/ProjectAll/ProjectAll'
import CartFuniture from './CartFurniture/CartFurniture'
import { productgetAll } from '../../redux/reducers/product'

import Slider from "react-slick";

function Furniture() {
  const dispatch = useDispatch()
  const { productlist } = useSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(productgetAll())
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='fu'>
      <div className='fu_box'>
        {
          productlist?.data?.map((item, index) => {
            return (
              <CartFuniture item={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Furniture