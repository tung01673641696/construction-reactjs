import React from 'react'
import "./SupplierIntro.scss"

function SupplierIntro({detail}) {
  return (
    <div className='supplier_intro'>
      {detail.des}
    </div>
  )
}

export default SupplierIntro