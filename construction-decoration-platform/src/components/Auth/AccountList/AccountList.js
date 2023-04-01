import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyStore } from "../../../redux/reducers/store";

import "./AccountList.scss";

import avatar from "../../../assets/images/account/avatar.jpg";
import user1 from "../../../assets/images/account/user.svg";
import noti from "../../../assets/images/account/noti.svg";
import address from "../../../assets/images/account/address.svg";
import vourcher from "../../../assets/images/account/vourcher.svg";
import logout from "../../../assets/images/account/logout.svg";
import heart from "../../../assets/images/account/heart.svg";
import messenger from "../../../assets/images/account/messenger.svg";
import assest from "../../../assets/images/account/assest.svg";
import request from "../../../assets/images/account/request.svg";
import cart from "../../../assets/images/account/cart.svg";

import Seller from "./Seller/Seller";
import News from "./NewsManage/News";

function AccountList() {
  const naviagate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  console.log("user",user)

  return (
    <div className="account-user-list">
      <div className="account-user-avatar">
        {user.data.avatar ? (
          <img
            src={`${process.env.REACT_APP_API_URL}/${user.data.avatar}`}
            alt="error"
          />
        ) : (
          <img src={avatar} alt="" />
        )}
        <div className="account-user-avatar-name">
          <p>Xin chào</p>
          <p>
            <span>{user.data.full_name}</span>
          </p>
          <p>{user.data.email}</p>
        </div>
      </div>
      <Link to="/account">
        <div className="account-user-item">
          <img src={user1} alt="" />
          <p>Thông tin tài khoản</p>
        </div>
      </Link>
      <Link to="/">
        <div className="account-user-item">
          <img src={noti} alt="" />
          <p>Thông báo của tôi</p>
        </div>
      </Link>
      <Link to="/group">
        <div className="account-user-item">
          <img src={messenger} alt="" />
          <p>Tin nhắn của tôi</p>
        </div>
      </Link>
      <Link to="/account/address">
        <div className="account-user-item">
          <img src={address} alt="" />
          <p>Sổ địa chỉ</p>
        </div>
      </Link>
      <p className="account-user-item-text">Mua Hàng</p>
      <Link to="/account/order-management">
        <div className="account-user-item">
          <img src={cart} alt="" />
          <p>Quản lý đơn hàng</p>
        </div>
      </Link>

      <Link to="/account/favorite/product">
        <div className="account-user-item">
          <img src={heart} alt="" />
          <p>Sản phẩm yêu thích</p>
        </div>
      </Link>

      <Link to="/">
        <div className="account-user-item">
          <img src={assest} alt="" />
          <p>Đánh giá sản phẩm</p>
        </div>
      </Link>


      {/* <Link to="/">
        <div className="account-user-item">
          <img src={request} alt="" />
          <p>Yêu cầu trả hàng</p>
        </div>
      </Link> */}

      {/* <Link to="/">
        <div className="account-user-item ">
          <img src={vourcher} alt="" />
          <p>Ví voucher</p>
        </div>
      </Link> */}
      <Seller />
      {/* {user.data.type === 5 ? <Seller /> : ""} */}
      {/* {user.data.type === 5 ? <News /> : ""} */}

      {/* <p className="account-user-item-text">Dự án</p>
      <Link to="/project/manage-project">
        <div className="account-user-item">
          <img src={cart} alt="" />
          <p>Quản lí dự án</p>
        </div>
      </Link>
      <Link to="/project/add-project">
        <div className="account-user-item">
          <img src={cart} alt="" />
          <p>Thêm dự án</p>
        </div>
      </Link> */}


      <p className="account-user-item-text">Đăng xuất</p>
      <Link to="/">
        <div
          className="account-user-item"
          onClick={() => {
            localStorage.clear();
            naviagate("/");
            window.location.reload();
          }}
        >
          <img src={logout} alt="" />
          <p>Đăng xuất</p>
        </div>
      </Link>
    </div>
  );
}

export default AccountList;
