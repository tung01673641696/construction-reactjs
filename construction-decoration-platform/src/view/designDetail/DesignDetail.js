import React from 'react'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import ButtonFor from '../../components/Button/ButtonFor/ButtonFor'
import DesignBanner from '../../components/DesignDetail/DesignBanner/DesignBanner'
import DesignContent from '../../components/DesignDetail/DesignContent/DesignContent'
import Contact from '../../components/Contact/Contact'
import DesignSimilar from '../../components/DesignDetail/DesignSimilar/DesignSimilar'
import DesignStyle from '../../components/DesignDetail/DesignStyle/DesignStyle'

function DesignDetail() {
  return (
    <div className='design_detail'>
      <Header />
      <DesignBanner />
      <DesignStyle />
      <DesignContent />
      <Contact />
      <ButtonFor text="THIẾT KẾ LIÊN QUAN"/>
      <DesignSimilar />
      <Footer />
    </div>
  )
}

export default DesignDetail
