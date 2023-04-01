import React from 'react'
import Furniture from '../../../assets/images/furniture/furniture.png'
import "./CartFurniture.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function CartFuniture({ item }) {
  const { id } = useParams()
  const navigate = useNavigate()
  function handleClick() {
    navigate(`/furnitures-detail/${item.id}`)
    window.scrollTo(0, 0)
  }

  return (
    <div className='fu_card' onClick={() => handleClick()}>
      <div className='fu_img'>
        <img
          src={`${process.env.REACT_APP_API_URL}/${item.image_url[0].url}`}
          alt="error"
        />
      </div>

      <div className='fu_content'>
        <p className='fu_title'>{item.name}</p>
        <p className='fu_price'>
          <span className='color'>{item.price?.toLocaleString("de-DE")}đ</span>
          <span className='linethrough'>{item.original_price?.toLocaleString("de-DE")}đ</span>
        </p>
        <div className='fu_detail'>
          <div className='fu_color'>
            <div className='fu_color_default fu_color_private_1'></div>
            <div className='fu_color_default fu_color_private_2'></div>
            <div className='fu_color_default fu_color_private_3'></div>
          </div>

          <FavoriteBorderIcon style={{ color: "#FF0000" }} />
        </div>
      </div>
    </div>
  )
}

export default CartFuniture
