import React from 'react'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import "./Forum.scss"
import forum from "../../assets/images/forum/forum.png"
import Avatar from '../../assets/images/forum/avatar.png'


function Forum() {
  return (
    <div className='forum'>
      <Header />
      <div className='posts'>
        <div className='posts_left'>
          <h3 className='title'>Bài viết gần đây</h3>

          <div className='posts_box'>
            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>

            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>

            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>

            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>

            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>

            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='posts_right'>
          <h3 className='title'>Bài viết nổi bật</h3>

          <div className='posts_box'>
            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>

            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>

            <div className='posts_card'>
              <img src={forum} />

              <div className='posts_card_content'>
                <h4>Đánh giá nội thất của Trúc Linh</h4>

                <div className='posts_card_content_text'>
                  <img src={Avatar} />
                  <p><span>Hoàng Thanh Tùng</span> | 11:15 20/12/2022</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Forum
