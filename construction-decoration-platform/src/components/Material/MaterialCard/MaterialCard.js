import React from 'react'
import "./MaterialCard.scss"
import ImageCard from "../../../assets/images/material/material.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function MaterialCard({item}) {
  const navigate = useNavigate()
  const {id} = useParams()

  return (
    <div className='material_card'>
      <div className='material_card_img'>
        <img 
          src={`${process.env.REACT_APP_API_URL}/${item.image_url[0].url}`}
         alt='' />
      </div>

      <div className='material_card_content'>
        <h4 className='material_card_name'>{item.name}</h4>
        <p className='material_card_supplier'>{item.supplier}</p>
        <div className='material_card_icon'><FavoriteBorderIcon /></div>
        <div className='material_card_button'>
          <button className='material_card_button_click'
            onClick={() => navigate(`/material-detail/${item.id}`)}>
            Liên hệ ngay
          </button>
        </div>
      </div>
    </div>
  )
}

export default MaterialCard