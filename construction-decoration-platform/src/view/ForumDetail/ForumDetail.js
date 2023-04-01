import React from 'react'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import "./ForumDetail.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Avatar from '../../assets/images/forum/avatar.png';

function ForumDetail() {
  return (
    <div className='forum_detail'>
      <Header />

      <div className='forum_detail_posts'>
        <div className='forum_detail_posts_left'>
          <div className='posts_left_title'>
            <h3 className='title'>Đánh giá nội thất của Trúc Linh</h3>

            <div className='posts_left_title_interactive'>
              <div className='love'>
                <FavoriteBorderIcon />
                Thích
              </div>

              <div className='share'>
                <ShareOutlinedIcon />
                Chia sẻ
              </div>
            </div>
          </div>

          <div className='posts_left_info'>
            <img src={Avatar} />
            <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
          </div>
        </div>

        <div className='forum_detail_posts_right'>
          <h3 className='title'>Bình luận</h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ForumDetail
