import React, { useEffect } from 'react'
import "./FurnitureContent.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFavoriteProduct } from '../../../redux/reducers/product';
import productApi from '../../../api/productApi';
import AddCart from '../../Add/AddCart/AddCart';

function FurnitureContent({detail}) {
  const dispatch = useDispatch()
  const id = useParams()

  // useEffect(() => {
  //   dispatch(getFavoriteProduct(id))
  // }, [detail])

  const handleLike = async () => {
    const res = await productApi.onLike({product_id: id.id})
  }

  return (
    <div className='fu_content'>
      <h3 className='fu_content_name'>{detail?.name}</h3>
      <p className='fu_content_des'>Nhà cung cấp: <span>{detail?.store?.name}</span></p>
      <p className='fu_content_des'>Bảo hành: <span>12 tháng</span></p>

      <div className='fu_content_select'>
        <div className='fu_content_select_color color1'></div>
        <div className='fu_content_select_color color2'></div>
        <div className='fu_content_select_color color3'></div>
      </div>

      <span className='fu_content_price'>{detail?.price?.toLocaleString("de-DE")}đ</span>

      <div className='fu_content_comment'>
        <button className='fu_content_button'>Mô tả</button>
        <button className='fu_content_button fu_content_button_color'>Đánh giá</button>
      </div>

      <p className='fu_content_text'>
        {detail?.des}
      </p>

      <div className='fu_content_interactive'>
        <button className='fu_content_interactive_button button_love'
                onClick={() => handleLike()}
        >
          <FavoriteBorderIcon />
          Yêu thích
        </button>

        <button className='fu_content_interactive_button button_cart'>
         
          {/* Thêm vào giỏ hàng ccc */}
          <AddCart count={1} detail={detail}/>
        </button>
      </div>
    </div>
  )
}

export default FurnitureContent