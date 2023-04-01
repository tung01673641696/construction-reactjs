import React from 'react'
import Header from '../../../../view/layouts/header/Header'
import Footer from '../../../../view/layouts/footer/Footer'
import "./ForgotPassword.scss"
import { Link } from 'react-router-dom'
import Arrow from "../../../../assets/images/forgotPassword/arrow.svg"
import Gmail from "../../../../assets/images/forgotPassword/gmail.svg"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { openNotification } from '../../../Alert/AlertProduct'
import { verifyGmail } from '../../../../redux/reducers/user'

function ForgotPassword() {

  const dispatch = useDispatch()
  const [email, setEmail] = useState()

  const handleSubmit = () => {
    const data = {
      user_name: email
    };

    if (!email) {
      console.log("hehe")
      openNotification("error", "vui lòng nhập email");
      return;
    }

    try {
      dispatch(verifyGmail(data));
    } catch (error) {
      console.log(error);
      openNotification("error", "Gửi gmail thất bại");
    }
  }

  return (
    <div className='forgot_password'>
      <Header />

      <div className="content">
        <div className="content_box">
          <div className='content_box_link'>
            <Link to="/login"><img src={Arrow} /><span>Trở lại Đăng nhập</span></Link>
          </div>

          <div className="content_box_title">
            <h3>Quên mật khẩu</h3>
          </div>

          <div className="content_box_form">
            <img src={Gmail} />
            <input
              type="email"
              placeholder="Nhập Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <p>Nhập lại E-mail liên kết với tài khoản để đặt lại mật khẩu của bạn</p>

          <button onClick={() => handleSubmit()}>Tiếp tục</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ForgotPassword

