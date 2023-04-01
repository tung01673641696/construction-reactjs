import React from 'react'
import DesignSimilar from "../../../../assets/images/design/similarDesign.png"
import "./DesignCard.scss"

function DesignCard({item}) {
  return (
    <div className='design_similar_card'>
      <img src={DesignSimilar}/>
      <span>{item.title}</span>
    </div>
  )
}

export default DesignCard
