import React from 'react'
import Design from "../../../assets/images/design/design.png"
import "./CardDesign.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CardDesign({item}) {
  const navigate = useNavigate()

  function handleClick() {
    navigate("/design/design-detail")
    window.scrollTo(0,0)
  }

  return (
    // <Link to="/design/hehe">
      <div className='design_card' onClick={() => handleClick()}>
        <div className='design_img'>
          <img src={Design}/>
        </div>

        <span>{item.title}</span>
      </div>
    // </Link>
  )
}

export default CardDesign
