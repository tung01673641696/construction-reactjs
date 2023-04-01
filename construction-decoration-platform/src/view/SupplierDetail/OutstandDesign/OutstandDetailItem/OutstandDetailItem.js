import React from 'react'
import DesignSimilar from "../../../../assets/images/design/similarDesign.png"
import "./OutstandDetailItem.scss"

export default function OutstandDetailItem({item}) {
  return (
    <div className='outstand-detail-item'> 
      <img src={DesignSimilar}/>
      <span>{item.name}</span>
    </div>
  )
}
