import React from 'react'
import "./MaterialSlider.scss"
import Small1 from "../../../assets/images/material/small1.png"
import Small2 from "../../../assets/images/material/small2.png"
import Small3 from "../../../assets/images/material/small3.png"
import Small4 from "../../../assets/images/material/small4.png"

function MaterialSlider() {
  return (
    <div className='material_slider'>
      <div className='material_slider_small'>
        <img src={Small2}/>
        <img src={Small3}/>
        <img src={Small4}/>
      </div>
      <div className='material_slider_large'>
        <img src={Small1}/>
      </div>
    </div>
  )
}

export default MaterialSlider