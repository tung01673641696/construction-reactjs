import React from 'react'
import "./MaterialContent.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function MaterialContent() {
  return (
    <div className='material_content'>
      <h3 className='material_content_name'>Xi măng bền Sun Phát</h3>
      <p className='material_content_des'>Nhà cung cấp: <span>Nội Thất Mộc Việt - Công Ty TNHH Sản Xuất Và Thương Mại Mộc Việt</span></p>
      <p className='fu_content_des'>Bảo hành: <span>12 tháng</span></p>

      <span className='material_content_price'>Liên hệ</span>

      <div className='material_content_comment'>
        <button className='material_content_button'>Mô tả</button>
        <button className='material_content_button fu_content_button_color'>Đánh giá</button>
      </div>

      <p className='material_content_text'>
        Connect everything from your turntable and stereo to your wired speakers to enjoy vinyl, CDs, stored audio files, and streaming. You can even power outdoor speakers and expand your Sonos system to the backyard.
        Enjoy stereo sound for shows, movies, and video games when you connect Amp to your speakers and TV. Wirelessly add a pair of Sonos One surrounds for immersive home theater.
        The rack-mountable design features a specially developed heatsink for optimized airflow and heat management
        Get brilliant sound without compromising space or design with Sonos Architectural by Sonance, a collection of in-ceiling, in-wall, and outdoor speakers optimized for Amp.
      </p>

      <div className='material_content_interactive'>
        <button className='material_content_interactive_button button_love'>
          <FavoriteBorderIcon />
          Yêu thích
        </button>

        <button className='material_content_interactive_button button_cart'>
          <AddShoppingCartIcon />
          Thêm vào giỏ hàng 
        </button>
      </div>
    </div>
  )
}

export default MaterialContent